import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import { CATEGORIES } from "../data/dummy-data";
import CategoryTile from "../components/CategoryCardTile";
import HeaderButton from "../components/HederButton";

const MealsCategoryScreen = (props) => {
  const renderListItem = (itemData) => {
    return (
      <CategoryTile
        categoryData={itemData}
        onItemClick={navigateToMealsScreen}
      />
    );
  };

  const navigateToMealsScreen = (selectedCategory) => {
    props.navigation.navigate("MealsScreen", {
      categoryId: selectedCategory.id,
      title: selectedCategory.title,
    });
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderListItem} />
  );
};

MealsCategoryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Categories",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Navigation"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
    headerStyle: {
      backgroundColor: "blue",
    },
    headerTintColor: "white",
  };
};

const styles = StyleSheet.create({});
export default MealsCategoryScreen;
