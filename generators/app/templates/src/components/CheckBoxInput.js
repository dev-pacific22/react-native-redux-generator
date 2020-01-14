import React, { Component } from "react";
import { ListItem, CheckBox, Text } from "native-base";

export default class CheckBoxInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isChecked, onCheckBoxClick, label } = this.props;
    return (
      <ListItem noBorder
        onPress={() => onCheckBoxClick()}
      >
        <CheckBox checked={isChecked} />
        <Text> {label}</Text>
      </ListItem>
    );
  }
}
