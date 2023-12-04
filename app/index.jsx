import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/hem.jpg")}
        style={{
          width: wp(100),
          height: hp(39),
        }}
      />

      <View>
        <Text
          style={{
            fontSize: hp(5),
          }}
          className="text-white tracking-wider font-bold"
        >
          Meet Now?
        </Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => router.push("screens/home")}
          style={{
            height: hp(7),
            width: wp(80),
          }}
          className=" bg-cyan-400 flex items-center justify-center rounded-full  mt-5"
        >
          <Text
            style={{
              fontSize: hp(3),
            }}
            className="text-white tracking-wider "
          >
            Tap In!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
