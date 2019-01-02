import { createAppContainer, createSwitchNavigator } from "react-navigation";

// Screens
import HomeScreen from "../containers/HomeScreen";
import Login from "../containers/Login";

const appNavigation = createSwitchNavigator({
  HomeScreen,
  Login
});

export default createAppContainer(appNavigation);
