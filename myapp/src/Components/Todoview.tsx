import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Todoview = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    checked: false,
    id: "",
    lastUpdated: "",
  });

  const [wrong, setWrong] = useState(false);

  const { id } = useParams();
  const { title, description, checked, lastUpdated } = todo;

  const url = "http://localhost:5174/api/v1/todos";

  const fetchData = () => {
    axios
      .get(`${url}/get/${id}`)
      .then((res) => {
        const data = res.data;
        setTodo({
          title: data.todo.title,
          description: data.todo.description,
          checked: data.todo.checked,
          lastUpdated: data.todo.lastUpdated,
          id: data.todo.id,
        });
        console.log(data);
      })
      .catch((error) => {
        setWrong(true);
        console.log(error.message);
      });
  };

  const pushData = () => {
    const dataForPost = {
      ...todo,
      id,
      lastUpdated: new Date().toLocaleString(),
    };
    axios
      .patch(`${url}/update`, dataForPost)
      .then((res) => {
        console.log(res.data);
        fetchData();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const deleteTodo = () => {
    axios
      .delete(`${url}/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        fetchData();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleTitle = (e: any) => {
    setTodo({
      ...todo,
      title: e.target.value,
    });
  };
  const handleDescreption = (e: any) => {
    setTodo({
      ...todo,
      description: e.target.value,
    });
  };
  const handleChecked = () => {
    setTodo({
      ...todo,
      checked: !todo.checked,
    });
  };
  const handleCheckedChange = (e: any) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          display: wrong === true ? "flex" : "none",
        }}
        className="w-full basic-theme min-h-screen flex justify-center items-center flex-col  relative"
      >
        <Link to="/">
          <div className="text-slate-100">
            <p className="text-red-400">{id}</p> <br /> Doesn't exist{" "}
          </div>
          <br />
          <div>Go Back to home </div>
        </Link>
      </div>

      <div
        style={{
          display: wrong === false ? "flex" : "none",
        }}
        className="w-full basic-theme min-h-screen flex justify-center items-center flex-col  relative"
      >
        <div className="w-4/5 rounded p-2 theme-border flex justify-center items-center relative flex-col">
          <input
            id="title"
            name="title"
            onChange={handleTitle}
            className="w-full rounded p-2 m-2 my-1 theme-border basic-theme"
            value={title}
          />
          <textarea
            id="description"
            name="description"
            onChange={handleDescreption}
            className="w-full min-h-[100px] rounded p-2 m-2 my-1 theme-border basic-theme"
            value={description}
          />

          <div
            onClick={handleChecked}
            className="w-full rounded p-2 m-2 my-1 theme-border flex justify-between  items-centerbasic-theme"
          >
            <div>{checked === true ? "Checked" : "Unchecked"}</div>
            <input
              id="checked"
              name="checked"
              onChange={handleCheckedChange}
              type="checkbox"
              checked={checked === true ? true : false}
            />
          </div>

          <div className="w-full text-xs rounded p-2 m-2 my-1 theme-border">
            {lastUpdated}
          </div>
          <div className="w-full theme-border text-xs p-2 rounded my-1">
            ID : {id}
          </div>
          <div className="w-full text-xs p-1 rounded my-1 flex justify-around items-center">
            <Link to="/todoapp">
              <Button
                handleClick={() => {
                  deleteTodo();
                }}
                className="basic-theme theme-border p-2 px-4"
              >
                Delete
              </Button>
            </Link>
            <Button
              handleClick={() => {
                pushData();
              }}
              className="basic-theme theme-border p-2 px-4"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todoview;
