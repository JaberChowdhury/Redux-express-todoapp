import Button from "./Button";
import { AddCircle, DataUsage, LinearScale } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
  incrementCounter_by_count,
  decrementCounter_by_count,
} from "../services/actions/counterActions";

export default function Counter() {
  const count = useSelector((state: { counterReducer: { count: number } }) => {
    return state.counterReducer.count;
  });
  const dispatch = useDispatch();

  return (
    <div className="w-4/5 p-2 rounded basic-theme  theme-border shadow-md flex flex-col relative">
      <strong>Counter</strong>
      <div className="w-full basic-theme theme-border py-1 flex rounded justify-between px-2 items-center">
        <strong className="text-2xl">{count}</strong>
        <div className="flex justify-center items-center gap-2">
          <Button
            handleClick={() => {
              dispatch(incrementCounter());
            }}
            className="bg-green-400 text-2xl"
            type="button"
          >
            <AddCircle />
          </Button>
          <Button
            handleClick={() => {
              dispatch(incrementCounter_by_count(5));
            }}
            className="bg-green-400 text-2xl"
            type="button"
          >
            +5
          </Button>
          <Button
            handleClick={() => {
              dispatch(decrementCounter());
            }}
            className="bg-red-400 text-2xl"
            type="button"
          >
            <LinearScale />
          </Button>
          <Button
            handleClick={() => {
              dispatch(decrementCounter_by_count(5));
            }}
            className="bg-red-400 text-2xl"
            type="button"
          >
            -5
          </Button>
          <Button
            handleClick={() => {
              dispatch(resetCounter());
            }}
            className="bg-blue-400 text-2xl"
            type="button"
          >
            <DataUsage />
          </Button>
        </div>
      </div>
    </div>
  );
}
