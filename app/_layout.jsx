import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="screens/home"
        options={{
          title: "home",
        }}
      />
      <Stack.Screen
        name="screens/categories"
        options={{
          title: "categories",
        }}
      />
      <Stack.Screen
        name="screens/sections"
        options={{
          title: "section",
        }}
      />
      <Stack.Screen
        name="screens/randomize"
        options={{
          title: "randomize",
        }}
      />
    </Stack>
  );
}
