import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function StoreDetails() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <StatusBar style="light" />
      <Text style={{ color: "white" }} onPress={() => router.back()}>
        Click here to go back
      </Text>
    </View>
  );
}
