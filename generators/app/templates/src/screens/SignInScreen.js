import React, { Component } from "react";
import { StyleSheet, ActivityIndicator, Image, ScrollView } from "react-native";
import { Container, View, Text, Button, Root } from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import validator from "validator";
import { FloatingInput, CheckBoxInput, CustomAlert } from "../components";
import { AuthWrapper } from "../hoc/AuthHOC";
import { signInAction,resetAction } from "../action/SignInAction";
import { translate } from "../locales/index";
import { assets } from "../assets";
import { CONSTANTS, AUTH_STATUS, toastService, Colors } from "../utils";

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "test",
      password: "test",
      loading: false,
      isRememberMe: false,
      errors: {},
    };
  }
  redirectTo = (screen) => {
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

    if (validator.isEmpty(username)) {
      // to check as email we can make it as validator.isEmail(username)
      errors.hasErrorUsername = true;
      errors.errorMessageUsername = translate("error_valid_username");
    }
    // if (!CONSTANTS.REGEX.PASSWORD_REGEX.test(password)) {
    if (validator.isEmpty(password)) {
      errors.hasErrorPassword = true;
      errors.errorMessagePassword = translate("error_valid_password");
    }
    return errors;
  };


  handleResponseModal = (authStatus, message) => {
    switch (authStatus) {
      case AUTH_STATUS.SUCCESS:
        return (
          <CustomAlert
            title={translate('label_success')}
            message={message ? message : translate('message_sign_in_success')}
            confirmText={translate('label_button_ok')}
            onConfirmPressed={() => {
              this.props.resetAction();
              this.props.navigation.navigate('Dashboard');
            }}
            onCa
          />
        );
      case AUTH_STATUS.FAILED:
        return (
          <CustomAlert
            title={translate('label_failed')}
            message={message ? message : translate('message_sign_in_failed')}
            confirmText={translate('label_button_ok')}
          />
        );
    }
  };

  signInClicked = () => {
    const errors = this.validateSignInForm();
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      // this.setState({ loading: true });
      const { username, password } = this.state;
      // If there are multiple parallel calls put all over here.
      Promise.all([
        this.props.signInAction(username, password),
        // this.props.signInAction(username, password)
      ]).then(() => {
        //We can do final stuff like stop loader here
        // this.setState({ loading: false });
      });
    }
  };
  componentDidUpdate() {
    const { authStatus, message } = this.props;

    switch (authStatus) {
      case AUTH_STATUS.SUCCESS:
        // this.props.navigation.navigate("Dashboard");
        break;
      case AUTH_STATUS.FAILED:
        // toastService.showToast(message);
        break;
      default:
        break;
    }
  }
  render() {
    const { username, password, isRememberMe } = this.state;
    const {
      hasErrorUsername,
      errorMessageUsername,
      hasErrorPassword,
      errorMessagePassword,
    } = this.state.errors;
    const { loading, message, authStatus } = this.props;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {authStatus != '' && this.handleResponseModal(authStatus, message)}
        <View style={styles.logoContainer}>
          <Image style={{ height: 100, width: 100 }} source={assets.app_logo} />
          <Text>{translate("label_sign_in")}</Text>
        </View>
        <View styles={styles.inputContainer}>
          <Spinner visible={loading} styles={styles.spinnerStyle} />

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
          <CheckBoxInput
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
        <View style={styles.buttonContainer}>
          <Button
            primary
            rounded
            block
            title="Sign in"
            onPress={() => this.signInClicked()}
          >
            <Text>{translate("label_sign_in")}</Text>
          </Button>
          <Text>{translate("label_not_a_member")}</Text>
          <Button
            primary
            rounded
            block
            title="Sign up"
            onPress={() => this.redirectTo("SignUp")}
          >
            <Text>{translate("label_sign_up")}</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signInAction, resetAction }, dispatch);
};

const mapConnectStateToProps = ({ signIn }) => {
  const { message, isSignInSuccess, authStatus, loading } = signIn;
  return { message, isSignInSuccess, authStatus, loading };
};
export default connect(
  mapConnectStateToProps,
  mapDispatchToProps
)(AuthWrapper(SignInScreen));

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "transparent",
    minHeight: "50%",
    padding: 10,
  },
  inputContainer: {
    flex: 0.5,
    marginBottom: 25,
    justifyContent: "center",
  },

  spinnerStyle: {
    color: Colors.primary,
  },
  forgotPasswordContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 15,
    width: "100%",
    flex: 0.3,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 50,
    flex: 0.4,
    alignItems: "center",
  },
});
