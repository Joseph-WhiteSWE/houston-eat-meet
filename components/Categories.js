import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { categories } from "../constants/categories";

export default function Categories({ activeCategory, setActiveCategory }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((item, index) => {
        let isActive = item.name == activeCategory;
        let activeButton = isActive ? "bg-white" : "bg-black";

        return (
          <Pressable key={index} onPressIn={() => setActiveCategory(item.name)}>
            <View>
              <View
                className={activeButton}
                style={{
                  width: 60,
                  height: 60,
                  borderColor: "white",
                  borderWidth: 1,
                  paddingVertical: 5,
                  paddingHorizontal: 1,
                  borderRadius: 5,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                />
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 13,
                  fontWeight: "500",
                  marginVertical: 6,
                  textAlign: "center",
                }}
              >
                {item?.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
