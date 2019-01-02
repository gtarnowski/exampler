import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View style={container}>
        <Text>here</Text>
      </View>
    );
  }
}

const { container } = StyleSheet.create({
  container: {
    backgroundColor: "black"
  }
});

export default HomeScreen;
