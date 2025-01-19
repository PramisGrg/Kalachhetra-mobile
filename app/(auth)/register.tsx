import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { loginSchmea } from "~/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { cn } from "~/lib/utils";
import DateTimePicker from "@react-native-community/datetimepicker";

type TloginSchema = z.infer<typeof loginSchmea>;

const Register = () => {
  const [role, setRole] = useState("");

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TloginSchema>({
    resolver: zodResolver(loginSchmea),
  });

  const router = useRouter();

  const onSubmit = (data: TloginSchema) => {
    reset();
    setRole("");
    const value = {
      data,
      role,
    };
    console.log(value, "Submitted Data");
    router.push("/(setup)/setup-form");
  };

  return (
    <SafeAreaView className="p-2 flex min-h-screen justify-center items-center">
      <View className="p-2 flex gap-4">
        <View>
          <Text className="text-center text-xl font-bold">
            Create an account
          </Text>

          <Text className="text-center">
            Enter your email below to create an account
          </Text>
        </View>

        <View className="flex gap-2">
          <Text className="font-semibold">Email</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  className="border p-2 rounded-md border-gray-400"
                  placeholder="kalachhetra@gmail.com"
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                />
                {errors.email && (
                  <Text className="text-red-400">{errors.email.message}</Text>
                )}
              </>
            )}
          />
        </View>

        <View className="flex gap-2">
          <Text className="font-semibold">Password</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  className="border p-2 rounded-md border-gray-400"
                  placeholder="******"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                />
                {errors.password && (
                  <Text className="text-red-400">
                    {errors.password.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>

        <View className="flex gap-2">
          <Text className="font-semibold">Confirm Password</Text>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  className="border p-2 rounded-md border-gray-400"
                  placeholder="******"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                />
                {errors.confirmPassword && (
                  <Text className="text-red-400">
                    {errors.confirmPassword.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>

        <View className="flex gap-2">
          <Text className="font-semibold">What you want to be ?</Text>
          <View className="flex flex-row gap-4 justify-between">
            <TouchableOpacity
              onPress={() => setRole("artgeek")}
              className={cn(
                "border border-dashed flex flex-row items-center p-2",
                {
                  "border-gray-300": role !== "artgeek",
                  "border-gray-900": role === "artgeek",
                }
              )}
            >
              <Image
                className="h-20 w-20"
                source={require("../../assets/illustrations/Art-bro.png")}
              />
              <Text>Art Geek</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRole("artist")}
              className={cn(
                "border border-dashed flex flex-row items-center p-2",
                {
                  "border-gray-300": role !== "artist",
                  "border-gray-900": role === "artist",
                }
              )}
            >
              <Image
                className="h-20 w-20"
                source={require("../../assets/illustrations/Art-lover.png")}
              />
              <Text>Artist</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-primary rounded-md p-2"
        >
          <Text className="text-white text-center">Submit</Text>
        </TouchableOpacity>
        <Button title="Open" onPress={() => setOpen(true)} />
        <DateTimePicker
          mode="date"
          value={date}
          // modal
          // open={open}
          // date={date}
          // onConfirm={(date) => {
          //   setOpen(false);
          //   setDate(date);
          // }}
          // onCancel={() => {
          //   setOpen(false);
          // }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;
