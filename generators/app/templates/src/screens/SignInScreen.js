import React, { Component } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Container, Content, View, Text, Button, Card, Root, Toast } from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import validator from "validator";
import FloatingInput from "../components/FloatingInput";
import CheckBox from "../components/CheckBoxInput";
import { signInAction } from "../action/SignInAction";
import { translate } from "../locales/index";
import { CONSTANTS, AUTH_STATUS } from "../utils";

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
      isRememberMe: false,
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

  onTextChange = (value, name) => {
    this.setState({ [name]: value });
  };

  forgotPasswordClicked = () => {
    alert("Coming Soon...");
  };
  onRememberMeClicked = () => {
    this.setState({ isRememberMe: !this.state.isRememberMe });
  };

  validateSignInForm = () => {
    const { username, password } = this.state;
    const errors = {};

    if (validator.isEmpty(username)) { // to check as email we can make it as validator.isEmail(username)
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
    const errors = this.validateSignInForm();
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
  componentDidUpdate() {
    const{authStatus} = this.props;

    switch (authStatus) {
      case AUTH_STATUS.SUCCESS:
        this.props.navigation.navigate("Dashboard");
        break;
        case AUTH_STATUS.FAILED:
          Toast.show({
            text: "Login Failed! Try again",
            buttonText: 'Okay',
            duration: 5000,
            type: 'danger'
          })
          break;
      default:
        break;
    }

  }
  render() {
    const { username, password, loading, isRememberMe } = this.state;
    const {
      hasErrorUsername,
      errorMessageUsername,
      hasErrorPassword,
      errorMessagePassword
    } = this.state.errors;
    
    return (
      <Root>
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Card style={styles.cardStyle}>
            <Text>{translate("label_sign_in")}</Text>
            <View>
              <FloatingInput
                name={"username"}
                placeHolder={translate("label_username")}
                iconName="account-box"
                hasError={hasErrorUsername}
                errorMessage={errorMessageUsername}
                value={username}
                onChangeText={this.onTextChange}
                keyboardType="email-address"
                disabled={loading}
              />

              <FloatingInput
                name={"password"}
                placeHolder={translate("label_password")}
                iconName="lock"
                hasError={hasErrorPassword}
                errorMessage={errorMessagePassword}
                value={password}
                onChangeText={this.onTextChange}
                hasSecureTextEntry={true}
              />
            </View>
            <View style={styles.forgotPasswordContainer}>
              <CheckBox
                isChecked={isRememberMe}
                label={translate("label_remember_me")}
                onCheckBoxClick={this.onRememberMeClicked}
              />
              <Button
                transparent
                title="Forgot Password?"
                style={styles.buttonStyle}
                onPress={() => this.forgotPasswordClicked()}
              >
                <Text style={{ justifyContent: "center" }}>
                  {translate("label_forgot_password")}
                </Text>
              </Button>
            </View>

            <Button
              primary
              rounded
              bordered
              title="Sign in"
              style={styles.buttonStyle}
              onPress={() => this.signInClicked()}
            >
              <Text>{translate("label_sign_in")}</Text>
            </Button>
            <Text>Not an User? </Text>
            <Button
              primary
              rounded
              bordered
              title="Sign up"
              style={styles.buttonStyle}
              onPress={() => this.redirectTo("SignUp")}
            >
              <Text>{translate("label_sign_up")}</Text>
            </Button>
          </Card>
        </Content>
        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator animating={true} size="large" />
          </View>
        )}
      </Container>
      </Root>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ signInAction }, dispatch);
};

const mapConnectStateToProps = ({ signIn }) => {
  const { message, isSignInSuccess, authStatus } = signIn;
  return { message, isSignInSuccess, authStatus };
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
    backgroundColor: "#77777788",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  cardStyle: {
    justifyContent: "space-around",
    padding: 10,
    width: "100%",
    alignItems: "center",
    minHeight: "60%"
  },
  buttonStyle: {
    alignSelf: "stretch",
    justifyContent: "center"
  },
  forgotPasswordContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  }
});
