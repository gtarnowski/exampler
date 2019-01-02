import React, { Component } from "react";
import { View, Text } from "react-native";
import { small, heading, container } from "../../styles";
import Logo from '../../components/Logo'
import CategoryTiles from '../../components/CategoryTiles'

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
