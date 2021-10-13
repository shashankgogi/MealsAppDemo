import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HederButton";
import { useDispatch } from "react-redux";
import { saveFilterSettings } from "../state/actions/Favaurite";

const FilterView = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
      <Switch
        trackColor={{ true: "blue" }}
        thumbColor={Platform.OS === "android" ? "red" : ""}
        value={props.isSelected}
        onValueChange={props.onValueChange}
      />
    </View>
  );
};

const MealsFiltersScreen = (props) => {
  const [isGlutenSelected, setGlutenSelected] = useState(false);
  const [isVeganSelected, setVeganSelected] = useState(false);
  const [isVegetarianSelected, setVegetarianSelected] = useState(false);
  const [isLactosSelected, setLactosSelected] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const selectedFilters = {
      isGluten: isGlutenSelected,
      isVegan: isVeganSelected,
      isVegetarian: isVegetarianSelected,
      isLactos: isLactosSelected,
    };

    dispatch(saveFilterSettings(selectedFilters));
    console.log(selectedFilters);
  }, [
    isGlutenSelected,
    isVeganSelected,
    isVegetarianSelected,
    isLactosSelected,
    dispatch,
  ]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <View>
        <FilterView
          isSelected={isGlutenSelected}
          onValueChange={() => setGlutenSelected(!isGlutenSelected)}
        >
          Gluten Free
        </FilterView>
        <FilterView
          isSelected={isVeganSelected}
          onValueChange={() => setVeganSelected(!isVeganSelected)}
        >
          Vegan
        </FilterView>
        <FilterView
          isSelected={isVegetarianSelected}
          onValueChange={() => setVegetarianSelected(!isVegetarianSelected)}
        >
          Vegetarian
        </FilterView>
        <FilterView
          isSelected={isLactosSelected}
          onValueChange={() => setLactosSelected(!isLactosSelected)}
        >
          Lactos Free
        </FilterView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});

MealsFiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters",

    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Filter"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),

    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};
export default MealsFiltersScreen;
