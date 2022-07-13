import { View, Text, Image } from 'react-native'
import React from 'react'
import {
    ChevronDownIcon,
    UserIcon,
  } from "react-native-heroicons/outline";

const Header = () => {
  return (
    <View className="flex-row pb-3 mx-4 space-x-2 items-center">
      <Image
        source={{
          uri: "https://source.unsplash.com/random/100x10",
        }}
        className="w-7 h-7 bg-gray-300 rounded-full"
      />
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <View className="flex-row items-center">
          <Text className="font-bold text-xl">Current Location</Text>
          <ChevronDownIcon size={20} color="#0CB" />
        </View>
      </View>
      <UserIcon size={30} color="#0CB" />
    </View>
  );
}

export default Header