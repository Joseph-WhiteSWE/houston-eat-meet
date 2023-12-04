import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>This is the Home screen</Text>
      <Link href="/screens/categories" asChild>
        <Button title="Categories" />
      </Link>
      <Link href="/screens/sections" asChild>
        <Button title="Sections" />
      </Link>
      <Link href="/screens/randomize" asChild>
        <Button title="Randomize" />
      </Link>
    </View>
  );
}
