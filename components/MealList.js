import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";

const MealList = (props) => {
  const renderListItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imgUrl={itemData.item.imgUrl}
        mealId={itemData.item.id}
        onListItemClick={props.navigateToMealsDetailsScreen.bind(
          this,
          itemData.item
        )}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList data={props.displayMeals} renderItem={renderListItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default MealList;
