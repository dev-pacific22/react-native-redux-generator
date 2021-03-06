import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Item, Icon, Label, Input } from "native-base";

const FloatingInput = (props) => {
  const {
    placeHolder,
    hasError,
    iconName,
    errorMessage,
    hasSecureTextEntry,
    value,
    key,
    name,
  } = props;

  return (
    <React.Fragment>
      <Item floatingLabel error={hasError} style={styles.inputElement}>
        <Icon
          active
          type="MaterialIcons"
          name={iconName}
          style={styles.iconStyle}
        />
        <Label style={styles.placeHolderStyle}>{placeHolder}</Label>
        <Input
          {...props}
          secureTextEntry={hasSecureTextEntry}
          style={styles.inputPaddingLeft}
          onChangeText={(text) => props.onChangeText(text, name)}
          value={value}
          autoCapitalize="none"
        />
      </Item>
      {hasError ? (
        <Label style={styles.errorMessageStyle}>{errorMessage}</Label>
      ) : (
        <Label />
      )}
    </React.Fragment>
  );
};

export { FloatingInput };

const styles = StyleSheet.create({
  inputElement: {
    alignSelf: "stretch",
    marginTop: 15,
    paddingLeft: 0,
    paddingRight: 0,
    alignSelf: "center",
  },
  iconStyle: {
    fontSize: 16,
    color: "black",
  },
  placeHolderStyle: {
    marginLeft: 5,
  },
  errorMessageStyle: {
    alignSelf: "flex-start",
    color: "#FF2211",
    fontSize: 14,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  inputPaddingLeft: {
    paddingLeft: 10,
  },
});
