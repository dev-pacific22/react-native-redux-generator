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
      {...props}
      style={[
        defaultStyles.buttonStyle,
        disabled && defaultStyles.disabledStyle,
        lights && defaultStyles.lightButtonStyle,
        lights && disabled ? defaultStyles.lightDisableButtonStyle : {},
        transparent ? defaultStyles.transparentStyle : {},
        outline && defaultStyles.outlineStyle,
        style,
      ]}
      onPress={() => onPress()}
    >
      {iconLeft && (
        <Image source={iconLeftName} style={defaultStyles.leftIconStyle} />
      )}
      <Text
        style={[
          defaultStyles.textStyle,
          lights && defaultStyles.lightTextStyle,
          lights ? defaultStyles.lightTransparentTextStyle : {},
          { ...labelStyle },
          disabled ? defaultStyles.disableTextStyle : {},
          transparent ? defaultStyles.transparentTextStyle : {},
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
    width: MATRIX.BUTTON_WIDTH,
    borderRadius: MATRIX.BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
  },
  disableTextStyle: {
    color: Colors.secondaryTextColor,
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
    backgroundColor: Colors.transparent,
    borderColor: Colors.transparent,
  },
  transparentTextStyle: {
    color: Colors.primary,
    fontFamily: FONTS.FONT_MEDIUM,
    fontSize: FONT_SIZE.REGULAR,
  },
  lightButtonStyle: {
    backgroundColor: Colors.transparent,
  },
  lightTextStyle: {
    color: Colors.primaryTextColor,
  },
  lightDisableButtonStyle: {
    backgroundColor: Colors.secondaryTextColor,
    borderRadius: 0,
  },
  lightTransparentTextStyle: {
    color: Colors.primary,
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
  disabledStyle: {
    backgroundColor: Colors.darkGrey,
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
