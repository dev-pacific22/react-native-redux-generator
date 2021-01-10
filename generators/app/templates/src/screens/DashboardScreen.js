import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomHeader } from "../components";

const DashboardScreen = () => {
  return (
    <View>
      <CustomHeader
        title={"Dashboard"}
        leftButtonHandler={() => alert("You can add drawer here.")}
      />
      <Text> Dashboard Screen </Text>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});