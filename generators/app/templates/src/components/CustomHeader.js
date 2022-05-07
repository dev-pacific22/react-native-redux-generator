import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar, Box, HStack, IconButton, Text } from "native-base";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../utils";

const CustomHeader = ({
  title,
  isLeft = true,
  leftIcon = "bars",
  leftButtonHandler,
  isRight,
  rightIcon = "ellipsis-v",
  rightButtonHandler,
}) => (
  <>
    <HStack
      bg={Colors.primary}
      px="1"
      py="2"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
    >
      <HStack alignItems="center">
        {isLeft && (
          <IconButton
            onPress={leftButtonHandler}
            icon={
              <Icon style={styles.iconStyle} name={leftIcon} size={16} solid />
            }
          />
        )}
        <Text color="white" fontSize="20" fontWeight="bold">
          {title}
        </Text>
      </HStack>
      <HStack>
        {isRight && (
          <IconButton
            onPress={rightButtonHandler}
            icon={
              <Icon style={styles.iconStyle} name={rightIcon} size={16} solid />
            }
          />
        )}
      </HStack>
    </HStack>
  </>
);

const styles = StyleSheet.create({
  iconStyle: {
    padding: 3,
    fontSize: 18,
    color: "white",
  },
});

export { CustomHeader };
CustomHeader.propTypes = {
  title: PropTypes.string,
  isLeft: PropTypes.bool,
  leftIcon: PropTypes.string,
  leftButtonHandler: PropTypes.func,
  isRight: PropTypes.bool,
  rightIcon: PropTypes.string,
  rightButtonHandler: PropTypes.func,
};
