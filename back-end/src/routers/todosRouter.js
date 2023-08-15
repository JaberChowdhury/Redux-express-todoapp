const express = require("express");
const getTodos = require("../controllers/getTodos.controller.js");
const getTodo = require("../controllers/getTodo.controller.js");
const addTodo = require("../controllers/addTodo.controller.js");
const deleteTodo = require("../controllers/deleteTodo.controller.js");
const updateTodo = require("../controllers/updateTodo.controller.js");

const todosRouter = express.Router();

todosRouter.get("/get", getTodos);
todosRouter.get("/get/:id", getTodo);
todosRouter.post("/post", addTodo);
todosRouter.delete("/delete/:id", deleteTodo);
todosRouter.patch("/update", updateTodo);

module.exports = todosRouter;
