import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import CountryPicker from "react-native-country-picker-modal";
import { CountryCode, Country } from "~/types/types";
import { ChevronDown, ChevronUp } from "lucide-react-native";
import { Controller, useFormContext } from "react-hook-form";
import { TArtistAccountFormSchema } from "~/schema/artist.schema";
import DateTimePicker from "@react-native-community/datetimepicker";

const StepOne = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>("NP");
  const [country, setCountry] = useState<Country>();
  const [date, setDate] = useState(new Date());
  const [showpicker, setShowPicker] = useState(false);

  const {
    control,
    formState: { errors },
  } = useFormContext<TArtistAccountFormSchema>();

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    console.log(country.name, "This is country");
  };

  const onDateChange = () => {
    console.log(date, "This is date");
    setShowPicker(false);
  };

  return (
    <SafeAreaView>
      <View className="flex gap-2">
        <View>
          <Text className="text-xl font-semibold">
            Step 1: Personal Details
          </Text>
        </View>

        <View className="flex flex-row justify-between gap-4">
          <View className="flex-1">
            <Label>First Name</Label>
            <Controller
              control={control}
              name="firstName"
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder="First Name"
                />
              )}
            />
            {errors.firstName && (
              <Text className="text-red-500">{errors.firstName.message}</Text>
            )}
          </View>
          <View className="flex-1">
            <Label>Last Name</Label>
            <Controller
              control={control}
              name="lastName"
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder="Last Name"
                />
              )}
            />
            {errors.lastName && (
              <Text className="text-red-500">{errors.lastName.message}</Text>
            )}
          </View>
        </View>

        <View>
          <Label>Select your gender</Label>
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, value } }) => (
              <Select
              // value={value}
              // onValueChange={onChange}
              >
                <SelectTrigger>
                  <SelectValue
                    className="text-foreground text-sm native:text-lg"
                    placeholder="Select your gender"
                  />
                </SelectTrigger>
                <SelectContent className="w-[90%]">
                  <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem label="Male" value="male">
                      Male
                    </SelectItem>
                    <SelectItem label="Female" value="female">
                      Female
                    </SelectItem>
                    <SelectItem label="Other" value="other">
                      Other
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </View>

        <View>
          <Label>Email</Label>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                placeholder="Enter a email"
              />
            )}
          />
          {errors.email && (
            <Text className="text-red-400">{errors.email.message}</Text>
          )}
        </View>

        <View>
          <Label>Country Picker</Label>
          <View className="border flex flex-row justify-between border-gray-600 rounded-md bg-primary/5 p-1">
            <Controller
              name={"address.country"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <View className="border flex flex-row justify-between border-gray-600 rounded-md bg-primary/5 p-1">
                  <CountryPicker
                    {...{
                      countryCode,
                      withFilter: true,
                      withFlag: true,
                      withCountryNameButton: true,
                      withCallingCode: true,
                      withEmoji: true,
                      onSelect,
                    }}
                  />
                  <View className="items-center mt-2">
                    <Text className="-mb-2 text-gray-400">▲</Text>
                    <Text className="text-gray-400">▼</Text>
                  </View>
                </View>
              )}
            />
            {errors.address?.country && (
              <Text className="text-red-400">
                {errors.address.country.message}
              </Text>
            )}
            <View className="items-center mt-2">
              <ChevronUp size={16} className="-mb-2 text-gray-400" />
              <ChevronDown size={16} className="text-gray-400" />
            </View>
          </View>
        </View>

        <View>
          <Label>Date of Birth</Label>

          <TouchableOpacity
            className="bg-pink-400 border p-2 rounded-md"
            onPress={() => setShowPicker(true)}
          >
            <Text>Click me</Text>
          </TouchableOpacity>
          {showpicker && (
            <DateTimePicker mode="date" onChange={onDateChange} value={date} />
          )}
        </View>

        <View className="flex flex-row gap-4">
          <View className="flex-1">
            <Label>State</Label>
            <Controller
              control={control}
              name={"address.state"}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  placeholder="Enter your state"
                  onChangeText={onChange}
                />
              )}
            />
            {errors.address?.state && (
              <Text className="text-red-400">
                {errors.address.state.message}
              </Text>
            )}
          </View>

          <View className="flex-1">
            <Label>City</Label>
            <Controller
              control={control}
              name={"address.city"}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  placeholder="Enter your city"
                  onChangeText={onChange}
                />
              )}
            />
            {errors.address?.city && (
              <Text className="text-red-400">
                {errors.address.city.message}
              </Text>
            )}
          </View>
        </View>

        <View className="flex flex-row gap-4">
          <View className="flex-1">
            <Label>Street</Label>
            <Controller
              control={control}
              name={"address.street"}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  placeholder="Enter your street"
                  onChangeText={onChange}
                />
              )}
            />
            {errors.address?.street && (
              <Text className="text-red-400">
                {errors.address.street.message}
              </Text>
            )}
          </View>

          <View className="flex-1">
            <Label>Zip</Label>
            <Controller
              control={control}
              name={"address.zip"}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value ? String(value) : ""}
                  placeholder="Enter your zip"
                  onChangeText={onChange}
                />
              )}
            />
            {errors.address?.zip && (
              <Text className="text-red-400">{errors.address.zip.message}</Text>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StepOne;
