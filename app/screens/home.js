import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Categories from "../../components/Categories";
import Stores from "../../components/Stores";
import { ScrollView } from "react-native-virtualized-view";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Brunch");
  const [categories, setCategories] = useState([]);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "black",
        paddingTop: 25,
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
      <Text
        style={{
          textAlign: "center",
          marginTop: 7,
          letterSpacing: 4,
          marginBottom: 5,
          color: "white",
        }}
      >
        STORES
      </Text>
      <View style={{ marginTop: 25 }}>
        <Stores />
      </View>
    </ScrollView>
  );
}
