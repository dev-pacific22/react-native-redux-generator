import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from "../screens/SignInScreen.js";
import SignUpScreen from "../screens/SignUpScreen";

import DashboardScreen from "../screens/DashboardScreen";

const AuthNavigator = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  },
  { initialRouteParams: "SignIn" }
);

const DashboardNavigator = createStackNavigator(
  {
    Dashboard: DashboardScreen
  },
  {
    initialRouteParams: "SignIn",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Dashboard: DashboardNavigator
}, 
{
    initialRouteParams: "Auth"
}

);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer