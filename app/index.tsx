import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center h-screen items-center">
      <Text className="text-4xl text-primary font-bold">Kalachhetra</Text>
      <Text className="text-gray-700">A place for artist and ark geek</Text>
      <TouchableOpacity
        className="bg-primary p-3 rounded-md mt-6"
        onPress={() => router.push("/(auth)/register")}
      >
        <Text className="text-white">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
