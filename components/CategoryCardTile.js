import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryTile = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.listItem}
      onPress={props.onItemClick.bind(this, props.categoryData.item)}
    >
      <View
        style={{
          ...styles.container,
          backgroundColor: props.categoryData.item.color,
        }}
      >
        <Text numberOfLines={2} style={styles.title}>
          {props.categoryData.item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    margin: 10,
    height: 150,
  },
  container: {
    flex: 1,
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 1,
    borderRadius: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  title: {
    padding: 10,
    fontFamily: "open-sans-bold",
    textAlign: "right",
  },
});
export default CategoryTile;
