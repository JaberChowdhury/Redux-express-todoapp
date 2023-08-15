import { Link } from "react-router-dom";

export default function Home() {
  const items = [
    {
      name: "Counters",
      url: "Counters",
    },
    {
      name: "TodoApp",
      url: "TodoApp/todos",
    },
  ];
  return (
    <div className="w-full basic-theme min-h-screen flex flex-wrap justify-center items-center relative">
      {items.map((item, id) => {
        return (
          <Link
            className="w-[150px] theme-border basic-theme h-[150px] flex justify-center items-center relative m-2 rounded shadow-md"
            key={id}
            to={`/${item.url}`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
