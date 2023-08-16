import Todos from "../Components/Todos";
import Controlbar from "../Components/Controlbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllDeletedTodos } from "../services/actions/todosActions";
import { reverseDeletedTodos } from "../services/actions/todosActions";

interface todoType {
  title: string;
  description: string;
  checked: boolean;
  id: string;
  lastUpdated: string;
}

interface stateType {
  todosReducer: {
    deletedTodos: todoType[];
    isLoading_deleted: boolean;
    error_deleted: string;
  };
}

const Deletedtodos = () => {
  const dispatch = useDispatch();

  const { isLoading_deleted, deletedTodos, error_deleted } = useSelector(
    (state: stateType) => state.todosReducer,
  );

  useEffect(() => {
    dispatch(getAllDeletedTodos());
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center basic-theme items-center flex-col relative ">
      <Controlbar state="deletedTodos" reverseAction={reverseDeletedTodos} />
      <Todos
        route="deletedTodos"
        todos={deletedTodos}
        isLoading={isLoading_deleted}
        error={error_deleted}
      />
    </div>
  );
};

export default Deletedtodos;
