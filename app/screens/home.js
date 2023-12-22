import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Categories from "../../components/Categories";
import Stores from "../../components/Stores";
import { ScrollView } from "react-native-virtualized-view";
import { stores } from "../../constants/stores";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Brunch");
  const [getStores, setGetStores] = useState([]);

  useEffect(() => {
    getStoresInArray(activeCategory);
  }, []);

  const handleChangeCategory = category => {
    getStoresInArray(category);
    setActiveCategory(category);
  };

  // const categories = stores.map(store => store.category);
  // const storeNames = stores.flatMap(store =>
  //   store.items.map(item => item.name)
  // );

  const getStoresInArray = category => {
    const filteredStores = stores
      .filter(store => store.category === category)
      .flatMap(store => store.items);
    setGetStores(filteredStores);
    // console.log(filteredStores);
  };
  // const getStoresInArray = () => {
  //   const response = categories;
  //   console.log(response);
  //   // if(response){
  //   //   setGetStores(response.getStores)
  //   // }
  // };

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
        handleChangeCategory={handleChangeCategory}
      />
      {/* flex 100 removes the large gap between explore and stores */}
      <View style={{ flex: 100 }}>
        <Stores storeData={getStores} />
      </View>
    </SafeAreaView>
  );
}
