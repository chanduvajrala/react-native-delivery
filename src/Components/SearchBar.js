import { View, Text, TextInput } from 'react-native'
import React from 'react'
import {
    SearchIcon,
    AdjustmentsIcon,
  } from "react-native-heroicons/outline";

const SearchBar = () => {
  return (
    <View className="flex-row items-center space-x-2 mx-4 pb-2">
      <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
        <SearchIcon color="gray" size={20} />
        <TextInput
          placeholder="Restaurants and Cuisines"
          keyboardType="default"
        />
      </View>
      <AdjustmentsIcon color="#0CB" size={25} />
    </View>
  );
}

export default SearchBar