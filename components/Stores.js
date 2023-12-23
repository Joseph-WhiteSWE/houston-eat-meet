import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { stores } from "../constants/stores";

export default function Stores({ activeCategory }) {
  const filteredStores = stores
    .filter(store => store.category === activeCategory)
    .flatMap(store => store.items);
  return (
    <View>
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
      <FlatList
        data={filteredStores}
        numColumns={2}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-evenly",
        }}
        renderItem={({ item, index }) => (
          <StoreCard index={index} item={item} />
        )}
      />
    </View>
  );
}

const StoreCard = ({ item }) => {
  return (
    <TouchableOpacity>
      <Text
        style={{
          width: 130,
          height: 60,
          borderColor: "#E0E0E0",
          borderWidth: 1,
          paddingVertical: 20,
          paddingHorizontal: 1,
          borderRadius: 5,
          marginHorizontal: 10,
          marginVertical: 10,
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 13,
          fontWeight: "500",
          textAlign: "center",
          backgroundColor: "#d946ef",
        }}
      >
        {item.name.length > 18 ? item.name.slice(0, 18) + "..." : item.name}
      </Text>
    </TouchableOpacity>
  );
};
