import Todos from "../Components/Todos";
import Addtodo from "../Components/Addtodo";
import Controlbar from "../Components/Controlbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTodos } from "../services/actions/todosActions";
import { reverseTodos } from "../services/actions/todosActions";

interface todoType {
  title: string;
  description: string;
  checked: boolean;
  id: string;
  lastUpdated: string;
}

interface stateType {
  todosReducer: {
    todos: todoType[];
    deletedTodos: todoType[];
    isLoading: boolean;
    error: string;
  };
}

const Todoapp = () => {
  const dispatch = useDispatch();

  const { isLoading, todos, error } = useSelector(
    (state: stateType) => state.todosReducer,
  );

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center basic-theme items-center flex-col relative ">
      <Controlbar reverseAction={reverseTodos} />
      <Todos todos={todos} isLoading={isLoading} error={error} />
      <Addtodo />
    </div>
  );
};

export default Todoapp;
