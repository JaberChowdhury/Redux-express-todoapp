/*
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
*/
import "@fontsource/roboto/700.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todoapp from "./pages/Todoapp";
import Counters from "./pages/Counters";
import Deletedtodos from "./pages/Deletedtodos";
import Todoview from "./Components/Todoview";

export default function App() {
  const todosApis = {
    fetchApi: "http://localhost:5174/api/v1/todos/get",
    deleteApi: "http://localhost:5174/api/v1/todos/delete",
    postApi: "http://localhost:5174/api/v1/todos/update",
  };
  const deletedTodosApis = {
    fetchApi: "http://localhost:5174/api/v1/deletedtodos/get",
    deleteApi: "http://localhost:5174/api/v1/deletedtodos/delete",
    postApi: "",
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col relative bg-slate-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoApp/todos" element={<Todoapp />} />
        <Route
          path="/TodoApp/todos/:id"
          element={<Todoview apis={todosApis} route="get" />}
        />
        <Route path="/TodoApp/deletedtodos" element={<Deletedtodos />} />
        <Route
          path="/TodoApp/deletedtodos/:id"
          element={<Todoview apis={deletedTodosApis} route="deletedtodos" />}
        />
        <Route path="/Counters" element={<Counters />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}
