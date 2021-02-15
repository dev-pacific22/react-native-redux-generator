import { ON_LOADING_START, ON_LOADING_STOP } from "../action/types";

const initialState = {
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_LOADING_START: {
      return {
        ...initialState,
        loading: true,
      };
    }

    case ON_LOADING_STOP: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
