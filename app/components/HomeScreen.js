import React, { Component } from "react";
import { View, Text } from "react-native";

// Components, styles
import { small, heading, container } from "../styles";
import Logo from "./Logo";
import CategoryTiles from "./CategoryTiles";

const TXT_EXPLORE = "EXPLORE";
const TXT_SWAPI = "Star Wars API Interpretation";

const HomeScreen = () => (
  <View style={container}>
    <Logo />
    <Text style={heading}>{TXT_EXPLORE}</Text>
    <Text style={small}>{TXT_SWAPI}</Text>
    <CategoryTiles />
  </View>
);

export default HomeScreen;
