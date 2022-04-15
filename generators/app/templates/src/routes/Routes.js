import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import DashboardScreen from "../screens/DashboardScreen";
const Stack = createStackNavigator();

const AppNavigator = () => {
  const AuthStack = () => {
    return (
      <Stack.Navigator
        name="Auth"
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    );
  };
  const DashboardStack = () => {
    return (
      <Stack.Navigator
        name="DashboardStack"
        initialRouteName="Dashboard"
        headerMode="none"
      >
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Dashboard" component={DashboardStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
