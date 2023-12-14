import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Categories from "../../components/Categories";

export default function Home() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      {/* search bar: start */}
      <View
        className="flex-row items-center justify-between px-2 py-2 rounded-md my-5"
        style={{
          borderColor: "#c0c0c0",
          borderWidth: 1,
          width: 325,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <TextInput
          placeholder="Seach For Entertainment"
          placeholderTextColor={"white"}
        />
        <AntDesign name="search1" size={24} color="#0ea5e9" />
      </View>
      {/* search bar: end */}
      <Text
        style={{
          textAlign: "center",
          marginTop: 7,
          letterSpacing: 4,
          marginBottom: 5,
          color: "white",
        }}
      >
        EXPLORE
      </Text>
      <Categories />
      <Text
        style={{
          textAlign: "center",
          marginTop: 7,
          letterSpacing: 4,
          marginBottom: 5,
          color: "white",
        }}
      >
        ALL STORES
      </Text>
    </ScrollView>
  );
}
