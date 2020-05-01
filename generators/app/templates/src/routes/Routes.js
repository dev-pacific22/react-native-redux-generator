import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SignInScreen from "../screens/SignInScreen.js";
import SignUpScreen from "../screens/SignUpScreen";

import DashboardScreen from "../screens/DashboardScreen";

const AuthNavigator = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteParams: "SignIn",
    headerMode: "none",
  }
);

const DashboardNavigator = createStackNavigator(
  {
    Dashboard: DashboardScreen,
  },
  {
    initialRouteParams: "Dashboard",
    headerMode: "none",
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Dashboard: DashboardNavigator,
  },
  {
    initialRouteParams: "Auth",
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
