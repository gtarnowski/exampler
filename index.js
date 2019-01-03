import React from "react";
import { registerRootComponent } from "expo";
import { StyleSheet, View } from "react-native";
import { Provider as ReduxProvider } from "react-redux";

// Local imports
import { store } from "./app/utils/configureStore";
import App from "./app/App";
import { colors } from "./app/styles";

const Root = () => (
  <ReduxProvider store={store}>
    <View style={globalContainer}>
      <App />
    </View>
  </ReduxProvider>
);

const { globalContainer } = StyleSheet.create({
  globalContainer: {
    backgroundColor: colors.background,
    flex: 1
  }
});

registerRootComponent(Root);
