import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { translate } from "../locales";

const SignInScreen = () => {
  return (
    <View>
      <Text>{translate("label_username")}</Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
