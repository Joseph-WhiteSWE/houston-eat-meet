import { StyleSheet, Image, SafeAreaView, View } from "react-native"
import React from "react"
import { StatusBar } from "expo-status-bar"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center space-y-10 bg-black">
      <StatusBar style="light" />
      <View>
        <Image
          source={require("../../assets/img/hem.jpg")}
          style={{ width: 500, height: 300 }}
        />
      </View>
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "black",
//   },
// })
