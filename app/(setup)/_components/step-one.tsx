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
import DatePicker from "react-native-date-picker";

const StepOne = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>("NP");
  const [country, setCountry] = useState<Country>();

  const {
    control,
    formState: { errors },
  } = useFormContext<TArtistAccountFormSchema>();

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
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
          <Input placeholder="Enter your email" />
        </View>

        <View>
          <Label>Country Picker</Label>
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
              <ChevronUp size={16} className="-mb-2 text-gray-400" />
              <ChevronDown size={16} className="text-gray-400" />
            </View>
          </View>
        </View>

        <View>
          <Label>Date of Birth</Label>
        </View>

        <View className="flex flex-row gap-4">
          <View className="flex-1">
            <Label>State</Label>
            <Input placeholder="Enter your state" />
          </View>

          <View className="flex-1">
            <Label>City</Label>
            <Input placeholder="Enter your city" />
          </View>
        </View>

        <View className="flex flex-row gap-4">
          <View className="flex-1">
            <Label>Street</Label>
            <Input placeholder="Enter your street" />
          </View>

          <View className="flex-1">
            <Label>Zip</Label>
            <Input placeholder="Enter your zip" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StepOne;
