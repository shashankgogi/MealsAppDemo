import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import DefaultText from "../components/DefaultText";

const MealItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={props.onListItemClick.bind(this, props.mealId)}
    >
      <View>
        <View style={styles.mealHeader}>
          <ImageBackground
            source={{ uri: props.imgUrl }}
            style={{ flex: 1, borderRadius: 10 }}
          >
            <View style={styles.titleBackground}>
              <Text style={styles.title}>{props.title}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.mealDetail}>
          <DefaultText>{props.duration}</DefaultText>
          <DefaultText>{props.affordability}</DefaultText>
          <DefaultText>{props.complexity}</DefaultText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    overflow: "hidden",
  },

  mealHeader: {
    height: "80%",
  },

  titleBackground: {
    height: 50,
    backgroundColor: "rgba(0,0,0,0.7)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    padding: 10,
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
  },

  mealDetail: {
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});
export default MealItem;
