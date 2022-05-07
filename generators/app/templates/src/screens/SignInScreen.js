import React, { useState } from "react";
import { translate } from "../locales";
import { StyleSheet, View, Image } from "react-native";
import { CustomInput, Button, LabelText } from "../components";
import { assets } from "../assets";
import { Colors, MATRIX, showAlert } from "../utils";

const SignInScreen = ({ navigation }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [userNameType, setUserNameType] = useState("phone");
  const [showPassword, setShowPassword] = useState(false);

  const { email, phoneNumber, password } = values;
  const {
    hasErrorEmail,
    errorMessageEmail,
    hasErrorPhoneNumber,
    errorMessagePhoneNumber,
    hasErrorPassword,
    errorMessagePassword,
  } = errors;

  const onTextChange = (value, name, type) => {
    if (type === "number") {
      values[name] = value.replace(/[^0-9]/g, "");
    } else {
      if (name === "email") {
        values[name] = value?.toLowerCase();
      } else {
        values[name] = value;
      }
    }
    setValues({ ...values });
  };

  const validateForm = () => {
    let error = {};
    if (userNameType === "email" && !(email?.trim().length > 0)) {
      error.hasErrorEmail = true;
      error.errorMessageEmail = translate("error_valid_username");
    }
    if (userNameType === "phone" && !(phoneNumber?.trim().length > 0)) {
      error.hasErrorPhoneNumber = true;
      error.errorMessagePhoneNumber = translate("error_valid_phone_number");
    }
    if (!(password?.trim().length > 0)) {
      error.hasErrorPassword = true;
      error.errorMessagePassword = translate("error_valid_password");
    }

    return error;
  };

  const onNextClick = () => {
    const error = validateForm();
    if (Object.keys(error).length > 0) {
      setErrors(error);
    } else {
      navigation.navigate("Dashboard");
    }
  };

  const onSignUpClick = () => {
    navigation.replace("SignUp");
  };

  const onForgotPasswordClick = () => {
    showAlert("Comming Soon", "Yet to implement");
  };

  const togglePhoneAndEmail = () => {
    userNameType === "email"
      ? setUserNameType("phone")
      : setUserNameType("email");
  };

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
          {userNameType == "email" ? (
            <>
              <CustomInput
                containerStyle={styles.inputContainerStyle}
                name="email"
                onChangeText={onTextChange}
                width={"90%"}
                placeholder={translate("label_username")}
                iconName={"user"}
                hasError={hasErrorEmail}
                errorMessage={errorMessageEmail}
              />
              <CustomInput
                containerStyle={styles.inputContainerStyle}
                name="password"
                onChangeText={onTextChange}
                width={"90%"}
                placeholder={translate("label_password")}
                hasSecureTextEntry={true}
                iconName={"lock"}
                hasError={hasErrorPassword}
                errorMessage={errorMessagePassword}
                showPassword={showPassword}
                togglePassword={() => setShowPassword(!showPassword)}
              />
            </>
          ) : (
            <CustomInput
              containerStyle={styles.inputContainerStyle}
              name="phone"
              onChangeText={onTextChange}
              width={"90%"}
              placeholder={translate("label_username")}
              iconName={"phone-alt"}
              hasError={hasErrorPhoneNumber}
              type="number"
              errorMessage={errorMessagePhoneNumber}
            />
          )}

          <Button
            style={styles.emailPhoneButtonStyle}
            transparent
            onPress={togglePhoneAndEmail}
            buttonLabel={
              userNameType === "email"
                ? translate("label_use_phone_instead")
                : translate("label_use_email_instead")
            }
          />
          <Button
            style={styles.buttonStyle}
            onPress={() => onNextClick()}
            buttonLabel={translate("label_sign_in")}
          />
          <Button
            outline
            style={styles.buttonStyle}
            onPress={() => onSignUpClick()}
            buttonLabel={translate("label_sign_up")}
          />

          <Button
            style={styles.forgotPasswordButtonStyle}
            transparent
            onPress={onForgotPasswordClick}
            buttonLabel={translate("label_forgot_password")}
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
    marginTop: 20,
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
  emailPhoneButtonStyle: {
    marginHorizontal: MATRIX.MARGIN,
    alignSelf: "flex-end",
    marginVertical: 0,
    width: 160,
  },
  forgotPasswordButtonStyle: {
    marginHorizontal: MATRIX.MARGIN,
    alignSelf: "center",
    marginVertical: 0,
  },
  inputContainerStyle: {
    marginTop: 15,
    marginBottom: 15,
  },
});
