import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AuthWrapper } from "../hoc/AuthHOC";
import { resetAction } from "../redux/action/AuthAction";
import { LabelText, Button, CustomInput } from "../components";
import { assets } from "../assets";
import { translate } from "../locales";
import { Colors, MATRIX, FONTS, FONT_SIZE } from "../utils";

const SignUpScreen = ({ navigation }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [userNameType, setUserNameType] = useState("email");
  const [showPassword, setShowPassword] = useState(false);

  const { email, phoneNumber, password, fullName } = values;
  const {
    hasErrorFullName,
    errorMessageFullName,
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

  const togglePhoneAndEmail = () => {
    userNameType === "email"
      ? setUserNameType("phone")
      : setUserNameType("email");
    setErrors({});
  };

  const validateForm = () => {
    let error = {};
    if (!(fullName?.trim().length > 0)) {
      error.hasErrorFullName = true;
      error.errorMessageFullName = translate("error_valid_full_name");
    }
    if (userNameType === "email" && !(email?.trim().length > 0)) {
      error.hasErrorEmail = true;
      error.errorMessageEmail = translate("error_valid_email");
    }
    if (userNameType === "phone" && !(phoneNumber?.trim().length > 0)) {
      error.hasErrorPhoneNumber = true;
      error.errorMessagePhoneNumber = translate("error_valid_phone_number");
    }
    if (userNameType === "email" && !(password?.trim().length > 0)) {
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

  const onSignInClick = () => {
    navigation.navigate("SignIn");
  };
  return (
    <>
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
            label={translate("label_sign_up")}
          />
        </View>
        <View style={styles.inputContainer}>
          <CustomInput
            containerStyle={styles.inputContainerStyle}
            name="fullName"
            onChangeText={onTextChange}
            width={"90%"}
            placeholder={translate("label_full_name")}
            iconName={"user"}
            hasError={hasErrorFullName}
            errorMessage={errorMessageFullName}
            value={fullName}
          />
          {userNameType == "email" ? (
            <>
              <CustomInput
                containerStyle={styles.inputContainerStyle}
                name="email"
                onChangeText={onTextChange}
                width={"90%"}
                placeholder={translate("label_email")}
                iconName={"envelope"}
                hasError={hasErrorEmail}
                errorMessage={errorMessageEmail}
                value={email}
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
                value={password}
              />
            </>
          ) : (
            <CustomInput
              containerStyle={styles.inputContainerStyle}
              name="phoneNumber"
              onChangeText={onTextChange}
              width={"90%"}
              placeholder={translate("label_phone_number")}
              iconName={"phone-alt"}
              hasError={hasErrorPhoneNumber}
              type="number"
              errorMessage={errorMessagePhoneNumber}
              value={phoneNumber}
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
            buttonLabel={translate("label_sign_up")}
          />
          <Button
            outline
            style={styles.buttonStyle}
            onPress={() => onSignInClick()}
            buttonLabel={translate("label_sign_in")}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: "100%",
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
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: Colors.secondaryTextColor,
  },
  buttonStyle: {
    marginHorizontal: MATRIX.MARGIN,
    marginVertical: 20,
    alignSelf: "center",
  },
  emailPhoneButtonStyle: {
    marginHorizontal: MATRIX.MARGIN,
    alignSelf: "flex-end",
    marginVertical: 0,
    width: 160,
  },
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ resetAction }, dispatch);
};

const mapConnectStateToProps = ({ auth }) => {
  const { message, authStatus } = auth;
  return { message, authStatus };
};
export default connect(
  mapConnectStateToProps,
  mapDispatchToProps
)(SignUpScreen);
