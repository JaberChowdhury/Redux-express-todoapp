import { useDispatch } from "react-redux";
import { ChangeCircle } from "@mui/icons-material";

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
}

const Controlbar = ({ reverseAction }: propsType) => {
  const dispatch = useDispatch();

  const handleReverse = () => {
    dispatch(reverseAction());
  };

  return (
    <div className="basic-theme theme-border w-[90%] p-2 flex justify-center items-center relative rounded my-2">
      <div className="basic-theme px-2" onClick={handleReverse}>
        <ChangeCircle />
        Reverse
      </div>
    </div>
  );
};

export default Controlbar;
