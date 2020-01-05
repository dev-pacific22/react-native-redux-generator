import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import combineReducers from "./reducer";
import AppContainer from "./routes/Routes";

const store = createStore(combineReducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  constructor(props) {
    super(props)
  };
  
  render() {
    return (
      <Provider store= {store} >
        <AppContainer />
      </Provider>
    );
  }
}
