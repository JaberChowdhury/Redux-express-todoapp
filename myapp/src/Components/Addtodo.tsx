import { AddCard, Close } from "@mui/icons-material";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../Components/Button";
import axios from "axios";

const Addtodo = () => {
  const [inputState, setInputState] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const API_URL = "http://localhost:5174/api/v1/todos/post";

  const postTodo = () => {
    const dataForPost = {
      ...data,
      id: crypto.randomUUID(),
      lastUpdated: new Date().toLocaleString(),
      checked: false,
    };
    axios
      .post(API_URL, dataForPost)
      .then((res) => {
        console.log(res.data);
        setInputState(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <motion.div
      initial={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        y: "250px",
        x: "110px",
        top: "110px",
      }}
      animate={{
        width: inputState === true ? "100%" : "60px",
        height: inputState === true ? "440px" : "60px",
        borderRadius: inputState === true ? "10px" : "50%",
        y: inputState === true ? 0 : "550px",
        x: inputState === true ? 0 : "110px",
        top: inputState === true ? 0 : "110px",
      }}
      className="flex justify-center z-30 items-center basic-theme theme-border flex-col overflow-hidden fixed"
    >
      <motion.div
        initial={{
          display: "flex",
        }}
        animate={{
          display: inputState === true ? "flex" : "none",
        }}
        className="flex w-full gap-2 justify-center items-center flex-col relative"
      >
        <p className="w-4/5 text-left">Title</p>
        <input
          onChange={(e: any) => setData({ ...data, title: e.target.value })}
          className="w-4/5 basic-theme theme-border p-2 rounded shadow-md"
          type="text"
          id="text"
          name="text"
          value={data.title}
        />
        <p className="w-4/5 text-left">Description</p>
        <textarea
          onChange={(e: any) =>
            setData({ ...data, description: e.target.value })
          }
          className="w-4/5 min-h-[120px] basic-theme theme-border rounded shadow-md "
          id="description"
          name="description"
          value={data.description}
        />
        <Button
          className="theme-border basic-theme my-2"
          handleClick={() => {
            postTodo();
          }}
        >
          Add Todo
        </Button>
      </motion.div>

      <motion.div
        initial={{
          x: 0,
          y: 0,
        }}
        animate={{
          x: 0,
          y: inputState === true ? "20px" : 0,
        }}
        onClick={() => setInputState(!inputState)}
      >
        {inputState === true ? <Close /> : <AddCard />}
      </motion.div>
    </motion.div>
  );
};

export default Addtodo;
