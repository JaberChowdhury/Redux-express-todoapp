import Loading from "./Loading";
import Todo from "./Todo";

interface todoType {
  title: string;
  description: string;
  checked: boolean;
  id: string;
  lastUpdated: string;
}

interface propsType {
  isLoading: boolean;
  todos: todoType[];
  error: string;
}

const Todos = ({ isLoading, todos, error }: propsType) => {
  return (
    <div className="w-full bg-[#181C1F] min-h-screen flex items-center flex-col relative p-2">
      <div>{isLoading && <Loading />}</div>
      <div>{error && error}</div>
      <div className="w-full flex justify-center items-center flex-wrap relative gap-2">
        {todos?.map((todo) => {
          return (
            <Todo
              title={todo.title}
              description={todo.description}
              id={todo.id}
              lastUpdated={todo.lastUpdated}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
