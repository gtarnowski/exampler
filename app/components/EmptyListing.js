import React from "react";
import { View, Text } from "react-native";
import { heading, colors } from "../styles";

const EmptyListing = () => (
  <View
    style={{
      justifyContent: "center",
      backgroundColor: colors.background,
      flex: 1,
      height: "100%",
      width: "100%"
    }}
  >
    <Text style={heading}>Listing is Empty</Text>
  </View>
);

export default EmptyListing;
