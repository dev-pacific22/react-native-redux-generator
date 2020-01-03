import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  redirectTo = screen => {
    alert("SignUp Clicked");

    switch (screen) {
      case "SignUp":
        this.props.navigation.navigate("SignUp");
        break;
      case "Dashboard":
        this.props.navigation.navigate("Dashboard");
        break;

      default:
        alert("No Redirection Mentioned");
        break;
    }
  };

  render() {
    return (
      <View>
        <Text> Sign In Screen </Text>
        <Button title="Sign Up" onPress={() => this.redirectTo("SignUp")}></Button>
        <Button  title="Dashboard" onPress={() => this.redirectTo("Dashboard")}/>
      </View>
    );
  }
}

export default SignInScreen;
