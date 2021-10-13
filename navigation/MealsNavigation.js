import React from "react";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoryScreen from "../Screens/MealsCategoryScreen";
import CategoryMealsScreen from "../Screens/MealsListScreen";
import CategoryMealsDetailScreen from "../Screens/MealsDetailsScreen";
import FavouriteScreen from "../Screens/FavouriteScreen";
import FilterScreen from "../Screens/MealsFilterScreen";

import { Ionicons } from "@expo/vector-icons";

const defaultNavigationOps = {
  headerStyle: {
    backgroundColor: "blue",
  },
  headerTintColor: "white",
};

// Meals navigation

const MealsStackNavigation = createStackNavigator(
  {
    MealsCategory: CategoryScreen,
    MealsScreen: {
      screen: CategoryMealsScreen,
    },
    MealsDetailsScreen: CategoryMealsDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOps,
  }
);

// Favaurite navigation
const FavouriteNavigation = createStackNavigator(
  {
    FavauriteScreen: {
      screen: FavouriteScreen,
    },
    MealsDetailsScreen: CategoryMealsDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOps,
  }
);

// Tab navigation
const MealsTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsStackNavigation,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              size={25}
              color={tabInfo.tintColor}
              name="ios-restaurant"
            />
          );
        },
      },
    },
    Favourite: {
      screen: FavouriteNavigation,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons size={25} color={tabInfo.tintColor} name="ios-star" />
          );
        },
      },
    },
  },

  {
    tabBarOptions: {
      activeTintColor: "blue",
    },
  }
);

//FilterScreen Navigation
const FilterNavigation = createStackNavigator(
  {
    Filter: FilterScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOps,
  }
);

//Drawer navigation

const MealsDrawerNavigation = createDrawerNavigator(
  {
    MealsNavigation: {
      screen: MealsTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    MealsFilterScreen: {
      screen: FilterNavigation,
      navigationOptions: {
        drawerLabel: "Filters",
      },
    },
  },
  {
    contentOptions: {
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
      activeTintColor: "green",
    },
  }
);
export default createAppContainer(MealsDrawerNavigation);
