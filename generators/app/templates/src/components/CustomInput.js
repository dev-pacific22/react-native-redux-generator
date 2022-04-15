import React from "react";
import { StyleSheet, Text } from "react-native";
import { Stack, Input } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../utils/Colors";

const CustomInput = (props) => {
  const {
    placeHolder,
    hasError,
    iconName,
    errorMessage,
    hasSecureTextEntry,
    value,
    key,
    name,
    width,
  } = props;

  return (
    <React.Fragment>
      <Stack
        space={34}
        w={width ? width : "100%"}
        alignItems="center"
        p="2"
        m="1"
      >
        <Input
          w={{
            base: "100%",
            md: "20%",
          }}
          p="3"
          size="lg"
          borderWidth="0.5"
          borderRadius={4}
          borderColor={Colors.primaryTextColor}
          placeholder={placeHolder}
          secureTextEntry={hasSecureTextEntry}
          style={styles.inputPaddingLeft}
          onChangeText={(text) => props.onChangeText(text, name)}
          value={value}
          autoCapitalize="none"
          {...props}
          InputLeftElement={
            <Icon style={styles.iconStyle} name={iconName} size={16} solid />
          }
        />
      </Stack>
      {hasError ? (
        <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
      ) : (
        <Text />
      )}
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
    paddingLeft: 15,
    paddingRight: 15,
  },
  inputPaddingLeft: {
    paddingLeft: 10,
  },
});
