import { createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "./services/reducers/counterReducer";
import todosReducer from "./services/reducers/todosReducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  counterReducer,
  todosReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
