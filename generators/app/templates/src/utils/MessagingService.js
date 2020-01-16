import { Toast } from "native-base";
import { Alert } from "react-native";
export const toastService = {
  showToast: (
    message,
    duration = 2500,
    buttonText = "Ok",
    type = "default",
    position = "bottom"
  ) => {
    Toast.show({
      text: message,
      duration,
      position, // top| bottom
      textStyle: { textAlign: "center" },
      buttonText,
      type //  default | success | warning | danger
    });
  }
};

export const showAlert = (
  title = "Alert",
  message,
  positiveButtonLabel,
  negativeButtonLabel,
  positiveCallback,
  negativeCallback,
  isCancelable = false
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: positiveButtonLabel,
        onPress: positiveCallback
      },
      {
        text: negativeButtonLabel,
        onPress: negativeCallback,
        style: "cancel"
      }
    ],
    { cancelable: isCancelable }
  );
};
