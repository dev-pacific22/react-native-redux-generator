import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AuthWrapper } from "../hoc/AuthHOC";
import { resetAction } from "../action/SignInAction";

const SignUpScreen = () => {
  return (
    <View>
      <Text>Sign Up Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ resetAction }, dispatch);
};

const mapConnectStateToProps = ({ signIn }) => {
  const { message, authStatus, loading } = signIn;
  return { message, authStatus, loading };
};
export default connect(
  mapConnectStateToProps,
  mapDispatchToProps
)(AuthWrapper(SignUpScreen));
