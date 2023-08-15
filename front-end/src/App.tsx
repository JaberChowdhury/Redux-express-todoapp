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
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col relative bg-slate-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoApp/todos" element={<Todoapp />} />
        <Route path="/TodoApp/todos/:id" element={<Todoview />} />
        <Route path="/TodoApp/deletedtodos" element={<Deletedtodos />} />
        <Route path="/TodoApp/deletedtodos/:id" element={<Todoview />} />
        <Route path="/Counters" element={<Counters />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}
