import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { colors } from '../styles'

const Button = ({ onPress, title }) => (
  <TouchableHighlight onPress={onPress}>
    <View
      style={{
        backgroundColor: colors.snow,
        height: 42,
        justifyContent: "center",
        padding: 8,
      }}
    >
      <Text
        style={{
          color: colors.background,
          alignSelf: "center",
          fontWeight: "900",
          letterSpacing: 1
        }}
      >
        {(title).toUpperCase()}
      </Text>
    </View>
  </TouchableHighlight>
);

export default Button;
