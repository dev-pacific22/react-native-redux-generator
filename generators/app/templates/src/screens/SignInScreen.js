import React, { useState } from "react";
import { translate } from "../locales";
import { StyleSheet, Text, View, Image } from "react-native";
import { CustomInput, Button, LabelText } from "../components";
import { assets } from "../assets";
import { Colors, MATRIX } from "../utils";

const SignInScreen = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const onUserNameChange = (text) => {
    setUserName(text);
  };
  const onPasswordChange = (text) => {
    setPassword(text);
  };

  const onNextClick = () => {};
  return (
    <React.Fragment>
      <View style={styles.separator} />
      <View style={styles.containerStyle}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            source={assets.app_logo}
            style={styles.logoStyle}
          />
          <LabelText
            style={styles.logoTextStyle}
            label={translate("label_sign_in")}
          />
        </View>

        <View style={styles.inputContainer}>
          <CustomInput
            containerStyle={styles.inputContainerStyle}
            name="username"
            onChangeText={onUserNameChange}
            width={"75%"}
            placeholder={translate("label_username")}
            iconName={"user"}
          />
          <CustomInput
            containerStyle={styles.inputContainerStyle}
            name="password"
            onChangeText={onPasswordChange}
            width={"75%"}
            placeholder={translate("label_password")}
            hasSecureTextEntry={true}
            iconName={"lock"}
          />
          <Button
            style={styles.buttonStyle}
            onPress={() => onNextClick()}
            buttonLabel={translate("label_sign_in")}
          />
          <Button
            outline
            style={styles.buttonStyle}
            onPress={() => onNextClick()}
            buttonLabel={translate("label_sign_up")}
          />
        </View>
      </View>
      <View style={styles.separator} />
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
  buttonStyle: {
    marginHorizontal: MATRIX.MARGIN,
    marginVertical: 20,
  },
  inputContainerStyle: {
    marginTop: 15,
    marginBottom: 15,
  },
});
