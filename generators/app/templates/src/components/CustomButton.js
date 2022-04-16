import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import PropTypes from "prop-types";
import { Colors, FONTS, FONT_SIZE, MATRIX } from "../utils";

const Button = (props) => {
  const {
    buttonLabel,
    labelStyle,
    style,
    disabled,
    iconRight,
    iconStyles,
    transparent,
    lights,
    outline,
    iconLeft,
    iconLeftName,
    iconRightName,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      style={[
        defaultStyles.buttonStyle,
        lights && defaultStyles.lightButtonStyle,
        style,
        lights && disabled ? defaultStyles.lightDisableButtonStyle : {},
        transparent ? defaultStyles.transparentStyle : {},
        outline && defaultStyles.outlineStyle,
      ]}
      onPress={() => onPress()}
      {...props}
    >
      {iconLeft && (
        <Image source={iconLeftName} style={defaultStyles.leftIconStyle} />
      )}
      <Text
        style={[
          defaultStyles.textStyle,
          lights && defaultStyles.lightTextStyle,
          lights && transparent ? defaultStyles.lightTransparentTextStyle : {},
          { ...labelStyle },
          disabled ? defaultStyles.disableTextStyle : {},
          outline ? defaultStyles.outlineTextStyle : {},
        ]}
      >
        {buttonLabel}
      </Text>
      {iconRight && (
        <Icon
          style={[
            defaultStyles.iconStyle,
            disabled ? defaultStyles.disableTextStyle : {},
            lights && !disabled && defaultStyles.lightTextStyle,
          ]}
          name={iconRightName}
          size={16}
          solid
        />
      )}
    </TouchableOpacity>
  );
};

export { Button };

const defaultStyles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    height: MATRIX.BUTTON_HEIGHT,
    backgroundColor: Colors.primary,
    minWidth: MATRIX.BUTTON_WIDTH,
    borderRadius: MATRIX.BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
  },
  disableTextStyle: {
    color: Colors.buttonTextDisable,
  },
  textStyle: {
    fontSize: FONT_SIZE.BUTTON_TEXT,
    paddingLeft: 0,
    paddingRight: 0,
    color: Colors.white,
    fontFamily: FONTS.FONT_REGULAR,
  },
  iconStyle: {
    marginLeft: 10,
    marginTop: 4,
    color: Colors.inversePrimaryText,
  },
  transparentStyle: {
    alignSelf: "flex-start",
  },
  lightButtonStyle: {
    backgroundColor: Colors.primary,
  },
  lightTextStyle: {
    color: Colors.otpTextColor,
  },
  lightDisableButtonStyle: {
    backgroundColor: Colors.buttonLightDisable,
    borderRadius: 0,
  },
  lightTransparentTextStyle: {
    color: Colors.primaryTextColor,
  },
  outlineStyle: {
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.transparent,
    elevation: 0,
  },
  outlineTextStyle: {
    color: Colors.primary,
  },
  leftIconStyle: {
    height: 15,
    width: 15,
    marginEnd: 10,
  },
});

Button.propTypes = {
  buttonLabel: PropTypes.string,
  primary: PropTypes.bool,
  leftIcon: PropTypes.string,
  leftButtonHandler: PropTypes.func,
  isRight: PropTypes.bool,
  rightIcon: PropTypes.string,
  rightButtonHandler: PropTypes.func,
};
Button.props = {
  primary: true,
};
