import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const FavouriteScreen = (props) => {
  const favauriteMeals = useSelector((state) => state.meals.favauriteMeals);

  const navigateToMealsDetailsScreen = (mealData) => {
    props.navigation.navigate("MealsDetailsScreen", {
      selectedMeal: mealData.id,
      navigationTitle: mealData.title,
    });
  };

  if (favauriteMeals.length === 0 || !favauriteMeals) {
    return (
      <View style={styles.container}>
        <DefaultText style={styles.text}>
          No favaurites found. Start adding it
        </DefaultText>
      </View>
    );
  }

  return (
    <MealList
      displayMeals={favauriteMeals}
      navigateToMealsDetailsScreen={navigateToMealsDetailsScreen}
    />
  );
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

FavouriteScreen.navigationOptions = {
  headerTitle: "Favaurite",
};
export default FavouriteScreen;
