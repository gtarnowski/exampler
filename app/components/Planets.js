import React from "react";
import { upperFirst } from "lodash";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { colors, listingItemContainer, detailsText } from "../styles";

const Planets = ({ name, diameter, population, climate }) => {
  const getPopulationString = () => {
    if (population === "unknown" || !population) return "Unknown";
    return population.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <TouchableHighlight onPress={() => {}}>
      <View style={listingItemContainer}>
        <View style={planetContainer}>
          <View style={planet} />
        </View>
        <View style={detailsContainer}>
          <Text style={detailsText}>{name}</Text>
          <Text style={text}>Climate: {upperFirst(climate)}</Text>
          <Text style={text}>Diameter: {diameter}</Text>
          <Text style={text}>Population: {getPopulationString()}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export const {
  planetContainer,
  planet,
  detailsContainer,
  text
} = StyleSheet.create({
  planetContainer: {
    paddingTop: 24
  },
  planet: {
    backgroundColor: colors.snow,
    borderRadius: 100,
    height: 170,
    width: 170
  },
  detailsContainer: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
    padding: 24,
    width: "100%"
  },

  text: {
    color: colors.snow
  }
});

export default Planets;
