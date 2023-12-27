import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Categories from "../../components/Categories";
import Stores from "../../components/Stores";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Brunch");
  const [searchField, setSearchField] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        paddingTop: 25,
      }}
    >
      <StatusBar style="light" />

      {/* search bar: start */}
      <View
        className="flex-row items-center justify-between px-2 py-2 rounded-md my-5"
        style={{
          borderColor: "white",
          borderWidth: 1,
          width: 325,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <TextInput
          placeholder="Seach For Entertainment"
          placeholderTextColor={"white"}
          color="white"
          onChangeText={text => setSearchField(text)}
          value={searchField}
        />
        <AntDesign name="search1" size={24} color="#d946ef" />
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
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {/* flex 100 removes the large gap between explore and stores */}
      {/* <View style={{ flex: 1 }}> */}
      <View style={{ flex: 100 }}>
        <Stores activeCategory={activeCategory} searchField={searchField} />
      </View>
    </SafeAreaView>
  );
}
