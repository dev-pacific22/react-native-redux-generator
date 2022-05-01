import { compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const logger = createLogger();

export default (initialState = {}) => {
  const middleware = [ReduxThunk, logger];
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middleware)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);
  return composedEnhancers;
};
