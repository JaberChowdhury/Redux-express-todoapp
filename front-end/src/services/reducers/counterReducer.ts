import {
  INCREMENT,
  DECREMENT,
  RESET,
  INCREMENT_BY_COUNT,
  DECREMENT_BY_COUNT,
} from "../constant/counterConstant";

const initialState = {
  count: 0,
};

type actionType = {
  type:
    | typeof INCREMENT
    | typeof DECREMENT
    | typeof RESET
    | typeof INCREMENT_BY_COUNT
    | typeof DECREMENT_BY_COUNT;
  payload?: { count: number };
};

const counterReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };

    case DECREMENT:
      return { count: state.count - 1 };

    case RESET:
      return { count: 0 };

    case INCREMENT_BY_COUNT:
      return { count: state.count + (action.payload?.count || 0) };

    case DECREMENT_BY_COUNT:
      return { count: state.count - (action.payload?.count || 0) };

    default:
      return state;
  }
};

export default counterReducer;
