import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import getStore from "./redux";
import AppContainer from "./routes/Routes";
import { setI18nConfig } from "./locales";
import { Colors } from "./utils/Colors";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["new NativeEventEmitter"]);

const store = getStore();
setI18nConfig();

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaView style={[styles.container]}>
          <AppContainer />
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 0,
  },
});
export default App;
