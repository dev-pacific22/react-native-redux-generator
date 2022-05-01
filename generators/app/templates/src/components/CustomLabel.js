import React from "react";
import { StyleSheet, Text } from "react-native";
import { FONT_SIZE, FONTS, Colors } from "../utils";

const LabelText = (props) => {
  const { label, style, ...rest } = props;
  return (
    <Text {...rest} style={[styles.headerStyle, style]}>
      {label}
    </Text>
  );
};

export { LabelText };

const styles = StyleSheet.create({
  headerStyle: {
    color: Colors.primaryText,
    fontFamily: FONTS.FONT_MEDIUM,
    fontSize: FONT_SIZE.PAGE_HEADER,
  },
});
