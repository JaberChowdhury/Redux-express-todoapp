import { useDispatch } from "react-redux";
import { ChangeCircle } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

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

interface propsType {
  reverseAction: () => actionType;
  state: string;
}

const Controlbar = ({ reverseAction, state }: propsType) => {
  const dispatch = useDispatch();

  const handleReverse = () => {
    dispatch(reverseAction());
  };

  return (
    <div className="basic-theme theme-border w-[90%] p-2 flex justify-center items-center relative rounded my-2">
      <NavLink to="/" className="basic-theme px-2 active:text-teal-400">
        Home
      </NavLink>
      <div className="basic-theme px-2" onClick={handleReverse}>
        <ChangeCircle />
        Reverse
      </div>
      {state === "todos" ? (
        <NavLink
          to="/TodoApp/Deletedtodos"
          className="basic-theme px-2 active:text-teal-400"
        >
          Deletedtodos
        </NavLink>
      ) : (
        <NavLink
          to="/TodoApp/todos"
          className="basic-theme px-2 active:text-teal-400"
        >
          Todos
        </NavLink>
      )}
    </div>
  );
};

export default Controlbar;
