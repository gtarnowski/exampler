import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { colors, listingItemContainer as container } from "../styles";
import { categoryItems } from "./CategoryTiles";

const Starships = ({ name, passengers, model, manufacturer, categoryName }) => {
  const { iconComponent: Icon, iconName } = categoryItems.find(
    ({ name }) => name.toLowerCase() === categoryName
  );

  return (
    <TouchableHighlight onPress={() => {}}>
      <View style={listingItemContainer}>
        <View style={{ marginLeft: 16, justifyContent: "center" }}>
          <Icon name={iconName} size={50} color={colors.snow} />
        </View>
        <View style={detailsContainer}>
          <Text style={text}>{name}</Text>
          <Text style={small}>Passengers: {passengers}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const {
  detailsContainer,
  listingItemContainer,
  text,
  small
} = StyleSheet.create({
  listingItemContainer: {
    ...container,
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    marginTop: 0
  },
  detailsContainer: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 24,
    width: "100%"
  },
  text: {
    color: colors.snow,
    fontWeight: "600",
    fontSize: 16
  },
  small: {
    color: colors.snow,
    fontWeight: "300",
    fontSize: 14
  }
});

export default Starships;
