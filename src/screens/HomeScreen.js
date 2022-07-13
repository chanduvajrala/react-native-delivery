import { SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import FeatureRow from "../Components/FeatureRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [nearYou, setNearYou] = useState([])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-8">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <SearchBar />
        <Categories />
        <FeatureRow
          title="Featured"
          description="Paid placements from our partners"
          category="featured"
        />
        <FeatureRow
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
          category="offers"
        />
        <FeatureRow
          title="Tasty Discounts"
          description="Everyone has been enjoying these juicy discounts!"
          category="discounts"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
