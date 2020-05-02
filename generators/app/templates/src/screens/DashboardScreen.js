import React, { Component } from "react";
import { View, Text } from "react-native";
import { CustomHeader } from "../components";

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <CustomHeader title={"Dashboard"}
        leftButtonHandler = {()=> alert('You can add drawer here.')} />
        <Text> Dashboard Screen </Text>
      </View>
    );
  }
}

export default DashboardScreen;
