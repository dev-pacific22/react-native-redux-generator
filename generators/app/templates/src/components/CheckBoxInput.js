import React from "react";
import { ListItem, CheckBox, Text } from "native-base";

const CheckBoxInput = ({ isChecked, onCheckBoxClick, label }) => {
  return (
    <ListItem noBorder onPress={() => onCheckBoxClick()}>
      <CheckBox checked={isChecked} />
      <Text> {label}</Text>
    </ListItem>
  );
};

export { CheckBoxInput };
