import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

export default function Categories() {
  const groups = [
    {
      id: "0",
      name: "Brunch",
      //   image: "https://cdn-icons-png.flaticon.com/128/9356/9356378.png",
    },
    {
      id: "1",
      name: "Restuarants",
      //   image: "../assets/images/hem-images/cereals.png",
    },
    {
      id: "3",
      name: "Seafood",
      //   image: "https://www.flaticon.com/free-icons/cereal",
    },
    {
      id: "4",
      name: "International",
      //   image: "https://www.flaticon.com/free-icons/cereal",
    },
    {
      id: "5",
      name: "Soul Food",
      //   image: "https://www.flaticon.com/free-icons/cereal",
    },
    {
      id: "6",
      name: "BBQ",
      //   image: "https://www.flaticon.com/free-icons/cereal",
    },
    {
      id: "7",
      name: "Sweet Tooth",
      //   image: "https://www.flaticon.com/free-icons/cereal",
    },
    {
      id: "8",
      name: "Vibe",
      //   image: "https://www.flaticon.com/free-icons/cereal",
    },
    {
      id: "9",
      name: "Bars",
      //   image: "https://www.flaticon.com/free-icons/cereal",
    },
    {
      id: "10",
      name: "Cigar",
      //   image: "https://www.flaticon.com/free-icons/cereal",
    },
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {groups.map((item, index) => (
        <View
          key={index}
          style={{
            width: 90,
            height: 40,
            borderColor: "#E0E0E0",
            borderWidth: 1,
            paddingVertical: 5,
            paddingHorizontal: 1,
            borderRadius: 10,
            marginHorizontal: 10,
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          {/* <Image
            source={{ uri: item.image }}
            style={{
              width: 50,
              height: 50,
            }}
          /> */}

          <Text style={{ fontSize: 13, fontWeight: "500", marginVertical: 6 }}>
            {item?.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
