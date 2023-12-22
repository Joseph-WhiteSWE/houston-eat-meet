import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Landing Page",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="screens/home"
        options={{
          title: "Home Screen",
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="screens/categories"
        options={{
          title: "categories",
          // headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name="screens/stores"
        options={{
          title: "section",
          // headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name="screens/randomizeStore"
        options={{
          title: "randomize",
          // headerShown: false,
        }}
      /> */}
    </Stack>
  );
}
