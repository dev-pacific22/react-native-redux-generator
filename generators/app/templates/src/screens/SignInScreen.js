import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signInClickedAction, signInAction } from "../action/SignInAction";

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "test",
      password: "test",
      loading: false
    };
  }
  redirectTo = screen => {
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
    this.setState({ loading: true });
    const { username, password } = this.state;
    // If there are multiple parallel calls put all over here.
    Promise.all([
      this.props.signInAction(username, password)
      // this.props.signInAction(username, password)
    ]).then(() => {
      //We can do final stuff like stop loader here
      this.setState({loading: false });
    });
  };

  render() {
    const message = "You have clicked me and I came back from redux flow.";
    return (
      <View style={styles.container}>
        {this.state.loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        )}
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
  return bindActionCreators({ signInClickedAction, signInAction }, dispatch);
};

const mapConnectStateToProps = ({ signIn }) => {
  const { message } = signIn;
  return { message };
};
export default connect(
  mapConnectStateToProps,
  mapDispatchToProps
)(SignInScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});
