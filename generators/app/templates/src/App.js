import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import combineReducers from "./redux/reducer";
import AppNavigator from "./routes/Routes";
import { setI18nConfig } from "./locales";
import getStore from "./redux/store";

// const store = createStore(combineReducers, {}, applyMiddleware(ReduxThunk));
const store = getStore();
setI18nConfig();
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
