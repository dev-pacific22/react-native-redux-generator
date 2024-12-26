import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, Button } from "react-native";
import Modal from "react-native-modal";
import { translate } from "../locales";

const CustomAlert = ({
  message,
  title = translate("label_title_alert"),
  showConfirmButton = true,
  confirmText = translate("label_button_ok"),
  onConfirmPressed,
  showCancelButton = false,
  cancelText = translate("label_button_cancel"),
}) => {
  const [isModalVisible, dismissModal] = useState(true);

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.messageStyle}>{message}</Text>
        <Button
          title={confirmText}
          onPress={() => {
            dismissModal(false);
            onConfirmPressed && onConfirmPressed();
          }}
        />
        <Button title={cancelText} onPress={() => dismissModal(false)} />
      </View>
    </Modal>
  );
};

export { CustomAlert };

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  titleStyle: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  messageStyle: {
    margin: 10,
    fontSize: 16,
    fontWeight: "500",
  },
});

CustomAlert.propTypes = {
  message: PropTypes.string.isRequired,
  title: PropTypes.string,
  showConfirmButton: PropTypes.bool,
  confirmText: PropTypes.string,
  onConfirmPressed: PropTypes.func,
  showCancelButton: PropTypes.bool,
  cancelText: PropTypes.string,
};
