import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomHeader } from "../components";
import { Colors } from "../utils";

const DashboardScreen = () => {
  return (
    <View style={styles.parentContainer}>
      <CustomHeader
        title={"Dashboard"}
        leftButtonHandler={() => alert("You can add drawer here.")}
        rightIcon={"ellipsis-v"}
        isRight
        rightButtonHandler={() => alert("You can add handler for options")}
      />
      <View style={styles.container}>
        <Text> Dashboard Screen </Text>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkGrey,
  },
});
