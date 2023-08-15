import {
  INCREMENT,
  DECREMENT,
  RESET,
  INCREMENT_BY_COUNT,
  DECREMENT_BY_COUNT,
} from "../constant/counterConstant";

const incrementCounter = () => {
  return { type: INCREMENT };
};

const decrementCounter = () => {
  return { type: DECREMENT };
};
const resetCounter = () => {
  return { type: RESET };
};
const incrementCounter_by_count = (count: number) => {
  return { type: INCREMENT_BY_COUNT, payload: { count } };
};
const decrementCounter_by_count = (count: number) => {
  return { type: DECREMENT_BY_COUNT, payload: { count } };
};

export {
  incrementCounter,
  decrementCounter,
  resetCounter,
  incrementCounter_by_count,
  decrementCounter_by_count,
};
