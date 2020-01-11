import React, { Component } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import {
  Container,
  Content,
  View,
  Text,
  Button,
  Card,
  Item,
  Icon,
  Label,
  Input,
  CheckBox,
  ListItem
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import  FloatingInput  from "../components/FloatingInput";
import { signInClickedAction, signInAction } from "../action/SignInAction";
import { translate } from '../locales/index';
import { CONSTANTS } from "../utils";

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
      isRememberMe: false,
      errors: {}
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

  onUsernameChange = value => {
    this.setState({ username: value });
  };
  onPasswordChange = value => {
    this.setState({ password: password });
  };

  forgotPasswordClicked = () => {
    alert("Coming Soon...");
  };

  validateSignInForm = () => {
    const { username, password } = this.state;
    const errors = {};

    if (!validator.isEmail(email)) {
      errors.hasErrorUsername = true;
      errors.errorMessageUsername = translate("error_valid_username");
    }
    if (!CONSTANTS.REGEX.PASSWORD_REGEX.test(password)) {
      errors.hasErrorPassword = true;
      errors.errorMessagePassword = translate("error_valid_password");
    }
    return errors;
  };

  signInClicked = () => {
    const errors = this.validateRegistrationForm();
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
    const { username, password } = this.state;
    // If there are multiple parallel calls put all over here.
    Promise.all([
      this.props.signInAction(username, password)
      // this.props.signInAction(username, password)
    ]).then(() => {
      //We can do final stuff like stop loader here
      this.setState({ loading: false });
    });
  }
  };

  render() {
    const { username, password, loading, isRememberMe } = this.state;
    const {
      hasErrorUsername,
      errorMessageUsername,
      hasErrorPassword,
      errorMessagePassword
    } = this.state.errors;
    return (
      <Container>
        {this.state.loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        )}
        <Content contentContainerStyle={styles.container}>
          <Card style={styles.cardStyle}>
            <Text>Login</Text>


            <FloatingInput
              placeHolder={translate('label_username')}
              iconName="account-box"
              hasError={hasErrorUsername}
              errorMessage={errorMessageUsername}
              value={password}
              onChangeText={this.onUsernameChange}
              keyboardType="email-address"
              disabled={loading}
            />

            <FloatingInput
              placeHolder={translate('label_password')}
              iconName="lock"
              hasError={hasErrorPassword}
              errorMessage={errorMessagePassword}
              value={password}
              onChangeText={this.onPasswordChange}
              hasSecureTextEntry={true}
            />

            <View style={styles.forgotPasswordContainer}>
              <ListItem
                onPress={() => {
                  alert("Check Box Clicked");
                }}
              >
                <CheckBox checked={isRememberMe} />
                <Text> Remember Me </Text>
              </ListItem>
              <Button
                transparent
                title="Forgot Password?"
                style={styles.buttonStyle}
                onPress={() => this.forgotPasswordClicked()}
              >
                <Text>Forgot Password?</Text>
              </Button>
            </View>

            <Button
              primary
              rounded
              bordered
              title="Sign in"
              style={styles.buttonStyle}
              onPress={() => this.signInClicked(message)}
            >
              <Text>Sign In</Text>
            </Button>
          </Card>
        </Content>
      </Container>
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
    backgroundColor: "#ececec",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexWrap: "wrap"
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  cardStyle: {
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
    width: "100%",
    alignItems: "center",
    minHeight: "40%"
  },
  buttonStyle: {},
  forgotPasswordContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  }
});
