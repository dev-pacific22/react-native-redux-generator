import React from "react";
import { HStack, Checkbox } from "native-base";
import PropTypes from "prop-types";

const CheckBoxInput = ({ isChecked, onCheckBoxClick, label }) => {
  return (
    <HStack space={6}>
      <Checkbox
        onChange={() => onCheckBoxClick()}
        value={label}
        accessibilityLabel={label}
        isChecked={isChecked}
      />
    </HStack>
  );
};

export { CheckBoxInput };

CheckBoxInput.propTypes = {
  isChecked: PropTypes.bool,
  onCheckBoxClick: PropTypes.func,
  label: PropTypes.string,
};
