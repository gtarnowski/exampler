import { ActivityIndicator, View } from "react-native";
import { colors } from "../styles";
import React from "react";

const Loader = () => (
  <View
    style={{
      justifyContent: "center",
      height: "100%",
      backgroundColor: colors.background
    }}
  >
    <ActivityIndicator size={80} color={colors.snow} />
  </View>
);

export default Loader;

