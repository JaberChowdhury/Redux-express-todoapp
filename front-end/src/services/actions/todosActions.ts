import {
  API_URL_GET_TODOS,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  REVERSE_TODOS,
  GET_DELETED_TODOS_REQUEST,
  GET_DELETED_TODOS_SUCCESS,
  GET_DELETED_TODOS_FAILD,
  GET_TODOS_FAILD,
} from "../constant/todosConstant";
import axios from "axios";

export const getAllTodos = () => (dispatch: any) => {
  dispatch({ type: GET_TODOS_REQUEST });
  axios
    .get(API_URL_GET_TODOS)
    .then((res) => {
      const todos = res.data.database.todos;
      dispatch({ type: GET_TODOS_SUCCESS, payload: { todos } });
    })
    .catch((error) => {
      dispatch({ type: GET_TODOS_FAILD, payload: { error: error.message } });
    });
};

export const reverseTodos = () => {
  return {
    type: REVERSE_TODOS,
  };
};

export const getAllDeletedTodos = () => (dispatch: any) => {
  dispatch({ type: GET_DELETED_TODOS_REQUEST });
  axios
    .get(API_URL_GET_TODOS)
    .then((res) => {
      dispatch({
        type: GET_DELETED_TODOS_SUCCESS,
        payload: { deletedTodos: res.data.database.deletedTodos },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_DELETED_TODOS_FAILD,
        payload: { error_deleted: error.message },
      });
    });
};
