import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Card = ({title, image}) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
        source={{
          uri: image,
        }}
        className="w-20 h-20 rounded bg-gray-400"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Card