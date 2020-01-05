import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signInClickedAction } from "../action/SignInAction";

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

  signInClicked = message => {
    this.props.signInClickedAction(message);
  };

  render() {
    const message = "You have clicked me and I cam back from redux flow.";
    return (
      <View>
        <Text> Sign In Screen </Text>
        <Text> {this.props.message} </Text>
        <Button
          title="Sign in"
          onPress={() => this.signInClicked(message)}
        ></Button>
        <Button
          title="Sign Up"
          onPress={() => this.redirectTo("SignUp")}
        ></Button>
        <Button
          title="Dashboard"
          onPress={() => this.redirectTo("Dashboard")}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ signInClickedAction }, dispatch);
};

const mapConnectStateToProps = ({ signIn }) => {
  const { message } = signIn;
  return { message };
};
export default connect(
  mapConnectStateToProps,
  mapDispatchToProps
)(SignInScreen);
