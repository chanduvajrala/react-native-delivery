import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Card from './Card'
import { CATEGORY_LIST } from '../../../constants/categoryData'

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: 10,
      }}
    >
      {CATEGORY_LIST?.map((category, index) => {
        return <Card key={index} title={category.title} image={category.image} />;
      })}
    </ScrollView>
  );
}

export default Categories