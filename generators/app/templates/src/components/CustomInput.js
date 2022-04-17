import React from "react";
import { StyleSheet, Text } from "react-native";
import { Stack, Input } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../utils/Colors";
import { MATRIX } from "../utils";

const CustomInput = (props) => {
  const {
    placeHolder,
    hasError,
    iconName,
    errorMessage = "Please enter value",
    hasSecureTextEntry,
    value,
    key,
    name,
    width,
    containerStyle,
    inputStyle,
  } = props;

  return (
    <React.Fragment>
      <Stack
        space={2}
        w={width ? width : "100%"}
        alignItems="center"
        p="2"
        m="1"
        style={containerStyle}
      >
        <Input
          w={{
            base: "100%",
            md: "10%",
          }}
          p="3"
          size="lg"
          borderWidth="0.5"
          {...props}
          borderRadius={MATRIX.BORDER_RADIUS}
          borderColor={Colors.primaryTextColor}
          placeholder={placeHolder}
          secureTextEntry={hasSecureTextEntry}
          style={[styles.inputPaddingLeft, inputStyle]}
          onChangeText={(text) => props.onChangeText(text, name)}
          value={value}
          autoCapitalize="none"
          InputLeftElement={
            <Icon style={styles.iconStyle} name={iconName} size={16} solid />
          }
        />
        {hasError && (
          <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
        )}
      </Stack>
    </React.Fragment>
  );
};

export { CustomInput };

const styles = StyleSheet.create({
  inputElement: {
    marginTop: 15,
    paddingLeft: 0,
    paddingRight: 0,
    alignSelf: "center",
  },
  iconStyle: {
    paddingHorizontal: 8,
    fontSize: 16,
    color: "black",
  },
  placeHolderStyle: {
    marginLeft: 5,
  },
  errorMessageStyle: {
    alignSelf: "flex-start",
    color: Colors.error,
    fontSize: 14,
    paddingTop: 0,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 0,
  },
  inputPaddingLeft: {
    paddingLeft: 10,
  },
});
