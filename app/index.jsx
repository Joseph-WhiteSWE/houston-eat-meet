import { View, Text, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <StatusBar style="light" />
      <Image source={require('../assets/images/hem.jpg')} 
      style={{width: wp(100), height: hp(39)}}
      />
    </View>
  )
}