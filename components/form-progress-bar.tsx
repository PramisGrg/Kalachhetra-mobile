import { View, Text } from "react-native";
import React from "react";
import { Progress } from "./ui/progress";

const FormProgressBar = () => {
  return (
    <View className="px-6">
      <Progress value={40} />
    </View>
  );
};

export default FormProgressBar;
