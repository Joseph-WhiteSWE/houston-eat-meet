import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Categories({ activeCategory, setActiveCategory }) {
  const groups = [
    {
      id: 0,
      name: "Brunch",
      image: require("../assets/images/hem-images/pancake.png"),
    },
    {
      id: 1,
      name: "Restuarants",
      image: require("../assets/images/hem-images/taco.png"),
    },
    {
      id: 3,
      name: "Seafood",
      image: require("../assets/images/hem-images/salmon.png"),
    },
    {
      id: 4,
      name: "International",
      image: require("../assets/images/hem-images/bento.png"),
    },
    {
      id: 5,
      name: "Soul Food",
      image: require("../assets/images/hem-images/roast-chicken.png"),
    },
    {
      id: 6,
      name: "BBQ",
      image: require("../assets/images/hem-images/skewer.png"),
    },
    {
      id: 7,
      name: "Sweet Tooth",
      image: require("../assets/images/hem-images/cake-yum.png"),
    },
    {
      id: 8,
      name: "Views",
      image: require("../assets/images/hem-images/fuji-mountain.png"),
    },
    {
      id: 9,
      name: "Bars",
      image: require("../assets/images/hem-images/cocktail.png"),
    },
    {
      id: 10,
      name: "Cigars",
      image: require("../assets/images/hem-images/cigar.png"),
    },
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {groups.map((item, index) => {
        let isActive = item.name == activeCategory;
        let activeButton = isActive ? "bg-white" : "bg-black";

        return (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveCategory(item.name)}
          >
            <View>
              <View
                className={activeButton}
                style={{
                  width: 60,
                  height: 60,
                  borderColor: "#E0E0E0",
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
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
