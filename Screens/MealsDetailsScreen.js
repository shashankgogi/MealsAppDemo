import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import HeaderButton from "../components/HederButton";
import DefaultText from "../components/DefaultText";
import { favauriteToggleAction } from "../state/actions/Favaurite";

const DetailedView = (props) => {
  return (
    <View key={props.data} style={styles.detailContainer}>
      <Text style={styles.detailedText}>{props.data}</Text>
    </View>
  );
};

const MealsDetailsScreen = (props) => {
  let selectedMealId = props.navigation.getParam("selectedMeal");
  const meals = useSelector((state) => state.meals.meals);
  const favMeals = useSelector((state) => state.meals.favauriteMeals);
  const isCurrentMealIsFavaurite = favMeals.some(
    (meal) => meal.id === selectedMealId
  );

  let meal = meals.find((meal) => meal.id === selectedMealId);

  const dispatch = useDispatch();

  const favauritetoggleHandler = useCallback(() => {
    dispatch(favauriteToggleAction(selectedMealId));
  }, [selectedMealId]);

  useEffect(() => {
    props.navigation.setParams({
      favAction: favauritetoggleHandler,
    });
  }, [favauritetoggleHandler]);

  useEffect(() => {
    props.navigation.setParams({
      isFav: isCurrentMealIsFavaurite,
    });
  }, [isCurrentMealIsFavaurite]);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image style={styles.image} source={{ uri: meal.imgUrl }} />
        <View style={styles.container}>
          <DefaultText>{meal.duration}</DefaultText>
          <DefaultText>{meal.complexity}</DefaultText>
          <DefaultText>{meal.affordability}</DefaultText>
        </View>
        <Text style={styles.text}>Ingredins</Text>
        {meal.ingredins.map((ingredin) => (
          <DetailedView data={ingredin} />
        ))}
        <Text style={styles.text}>Steps</Text>
        {meal.steps.map((steps) => (
          <DetailedView data={steps} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "95%",
    height: 200,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    width: "95%",
    marginHorizontal: 10,
    backgroundColor: "#ccc",
  },
  text: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    marginVertical: 10,
  },

  detailContainer: {
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    width: "95%",
  },
  detailedText: {
    fontSize: 16,
    fontFamily: "open-sans",
  },
});

MealsDetailsScreen.navigationOptions = (navigationData) => {
  let title = navigationData.navigation.getParam("navigationTitle");
  let favauriteAction = navigationData.navigation.getParam("favAction");
  let isFav = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favarite"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={favauriteAction}
        />
      </HeaderButtons>
    ),
  };
};
export default MealsDetailsScreen;
