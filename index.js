import React, { Component } from "react";
import { Font, registerRootComponent } from "expo";
import { StyleSheet, View, Text } from "react-native";
import { store } from "./app/utils/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import App from "./app/App";

class Root extends Component {
  state = {
    loading: true
  };

  async componentWillMount() {
    await Font.loadAsync({
      "Rubik-Black": require("./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf"),
      "Rubik-BlackItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf"),
      "Rubik-Bold": require("./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf"),
      "Rubik-BoldItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf"),
      "Rubik-Italic": require("./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf"),
      "Rubik-Light": require("./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf"),
      "Rubik-LightItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf"),
      "Rubik-Medium": require("./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf"),
      "Rubik-MediumItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf"),
      "Rubik-Regular": require("./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf"),
      "rubicon-icon-font": require("./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf")
    });

    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    return (
      <ReduxProvider store={store}>
        <View style={globalContainer}>
          {loading ? <Text>Loading</Text> : <App />}
        </View>
      </ReduxProvider>
    );
  }
}

const { globalContainer } = StyleSheet.create({
  globalContainer: {
    backgroundColor: "#333",
    paddingTop: 24,
    flex: 1
  }
});

registerRootComponent(Root);
