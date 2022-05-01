import { createStore } from "redux";
import configStore from "./store/configStore";
import rootReducer from "./reducer";
export default (initialState = {}) => {
  const enhancers = configStore();
  const store = createStore(rootReducer, initialState, enhancers);
  return store;
};
