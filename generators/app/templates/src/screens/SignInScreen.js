import React, { useState } from "react";
import { translate } from "../locales";
import { StyleSheet, Text, View, Image } from "react-native";
import { CustomInput } from "../components";
import { assets } from "../assets";
import { Colors } from "../utils";

const SignInScreen = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const onUserNameChange = (text) => {
    setUserName(text);
  };
  const onPasswordChange = (text) => {
    setPassword(text);
  };
  return (
    <React.Fragment>
      <View style={styles.containerStyle}>
        <View style={styles.separator} />
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            source={assets.app_logo}
            style={styles.logoStyle}
          />
          <Text style={styles.logoTextStyle}>{translate("label_sign_in")}</Text>
        </View>

        <View style={styles.inputContainer}>
          <CustomInput
            name="username"
            onChangeText={onUserNameChange}
            width={"75%"}
            placeholder={translate("label_username")}
          />
          <CustomInput
            name="password"
            onChangeText={onPasswordChange}
            width={"75%"}
            placeholder={translate("label_password")}
            hasSecureTextEntry={true}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors.white,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginHorizontal: 16,
  },
  logoStyle: {
    height: 120,
    width: 80,
  },
  logoTextStyle: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "700",
  },
  inputContainer: {
    flexDirection: "column",
    maxWidth: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: Colors.secondaryTextColor,
  },
});
