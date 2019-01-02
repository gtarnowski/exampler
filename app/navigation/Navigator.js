import { createAppContainer, createStackNavigator } from "react-navigation";

// Screens
import HomeScreen from "../containers/HomeScreen";
import Categories from "../containers/Categories";
import LoginHomeScreen, { Login, Register } from "../containers/Login";
import { colors } from "../styles";

export const navigationOptions = {
  title: "",
  headerTransparent: true,
  headerTintColor: colors.snow,
};

const appNavigation = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions
  }
});

const loginNavigation = createStackNavigator({
  LoginHomeScreen: {
    screen: LoginHomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions
  },
  Register: {
    screen: Register,
    navigationOptions
  }
});

export const AppContainer = createAppContainer(appNavigation);
export const LoginAppContainer = createAppContainer(loginNavigation);
