import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import FeatureCard from './FeatureCard';

const FeatureRow = ({title, description, category}) => {
  return (
    <View>
      <View
        className="flex-row items-center mt-4 justify-between px-4"
        key={category}
      >
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={25} color="#0CB" />
      </View>
      <Text className="text-xs text-gray-400 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {[1,2,3,4].map((index)=>{
            return <FeatureCard key={index}/>
        })}
      </ScrollView>
    </View>
  );
}

export default FeatureRow;