import React from "react";
import { View, StyleSheet } from "react-native";

// import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const MealsListScreen = (props) => {
  const navigateToMealsDetailsScreen = (mealData) => {
    props.navigation.navigate("MealsDetailsScreen", {
      selectedMeal: mealData.id,
      navigationTitle: mealData.title,
    });
  };
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const categoryId = props.navigation.getParam("categoryId");
  const displayMeals = availableMeals.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  if (displayMeals.length === 0 || !displayMeals) {
    return (
      <View style={styles.container}>
        <DefaultText style={styles.text}>
          No meal found, Check your filters.
        </DefaultText>
      </View>
    );
  }

  return (
    <MealList
      displayMeals={displayMeals}
      navigateToMealsDetailsScreen={navigateToMealsDetailsScreen}
    />
  );
};

MealsListScreen.navigationOptions = (navigationData) => {
  let title = navigationData.navigation.getParam("title");
  return {
    headerTitle: title,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontFamily: "open-sans",
  },
});
export default MealsListScreen;
