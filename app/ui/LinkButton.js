import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

const LinkButton = ({ onPress, title }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={{ padding: 8 }}>
      <Text
        style={{
          textTransform: "uppercase",
          color: "white",
          alignSelf: "center"
        }}
      >
        {title}
      </Text>
    </View>
  </TouchableHighlight>
);

export default LinkButton;
