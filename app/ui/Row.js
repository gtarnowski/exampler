import { View } from "react-native";
import React from "react";

export default ({ style, children }) => (
  <View style={{ ...style, padding: 16 }}>{children}</View>
);
