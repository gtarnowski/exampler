import React from "react";
import { StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Tile from "./Tile";

const { container } = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
});

const categoryItems = [
  { name: "Planets", iconComponent: Ionicons, iconName: "ios-planet" },
  { name: "Starships", iconComponent: MaterialCommunityIcons, iconName: "rocket" },
  { name: "Vehicles", iconComponent: MaterialCommunityIcons, iconName: "car-sports" },
  { name: "Species", iconComponent: MaterialCommunityIcons, iconName: "alien" }
];

class CategoryTiles extends React.Component {
  render() {
    return (
      <View style={container}>
        {categoryItems.map((item, key) => (
          <Tile key={key} {...item} />
        ))}
      </View>
    );
  }
}

export default CategoryTiles;
