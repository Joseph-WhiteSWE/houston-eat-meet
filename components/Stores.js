import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { stores } from "../constants/stores";

export default function Stores() {
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
        data={stores}
        numColumns={2}
        keyExtractor={item => item.category}
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
const StoreCard = ({ item, index }) => {
  return (
    <View>
      {item.items.map((item, index) => (
        <TouchableOpacity key={index}>
          <Text
            style={{
              width: 90,
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
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
