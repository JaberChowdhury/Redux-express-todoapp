import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILD,
  REVERSE_TODOS,
  REVERSE_DELETED_TODOS,
  GET_DELETED_TODOS_REQUEST,
  GET_DELETED_TODOS_SUCCESS,
  GET_DELETED_TODOS_FAILD,
} from "../constant/todosConstant";

interface todoType {
  title: string;
  description: string;
  checked: boolean;
  id: string;
  lastUpdated: string;
}

interface actionType {
  type: string;
  payload?: {
    todos?: todoType;
    id?: string;
    error?: string;
    deletedTodos?: todoType;
    error_deleted?: string;
  };
}

interface initialStateType {
  todos: todoType[];
  isLoading: boolean;
  error: string;
  deletedTodos: todoType[];
  isLoading_deleted: boolean;
  error_deleted: string;
}

const initialState: initialStateType = {
  todos: [],
  isLoading: false,
  error: "",
  deletedTodos: [],
  isLoading_deleted: false,
  error_deleted: "",
};

const todosReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        todos: [],
        error: "",
      };

    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload && action.payload.todos,
        isLoading: false,
      };

    case GET_TODOS_FAILD:
      return {
        ...state,
        isLoading: false,
        todos: [],
        error: action.payload && action.payload.error,
      };

    case REVERSE_TODOS:
      return {
        ...state,
        todos: state.todos.reverse(),
      };

    case REVERSE_DELETED_TODOS:
      return {
        ...state,
        deletedTodos: state.deletedTodos.reverse(),
      };

    case GET_DELETED_TODOS_REQUEST:
      return {
        ...state,
        isLoading_deleted: true,
      };

    case GET_DELETED_TODOS_SUCCESS:
      return {
        ...state,
        deletedTodos: action.payload && action.payload.deletedTodos,
        isLoading_deleted: false,
        error_deleted: "",
      };

    case GET_DELETED_TODOS_FAILD:
      return {
        ...state,
        isLoading_deleted: false,
        error_deleted: action.payload && action.payload.error_deleted,
      };

    default:
      return state;
  }
};

export default todosReducer;
