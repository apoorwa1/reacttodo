import express from "express";
import {
  getAllTodos,
  addTodo,
  updateTodoById,
  deleteTodoById,
} from "../models/todo.js";
const router = express.Router();

//returning all the info from users
router.get("/", async function (req, res, next) {
  const allTodo = await getAllTodos();
  res.json({ success: true, payload: allTodo });
});

//add todo

router.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await addTodo(description);
    res.json({ success: true, payload: newTodo });
  } catch (error) {
    console.error(err.message);
  }
});

//update a  todo
router.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  const updatedTodo = await updateTodoById(id, description);
  res.json({ success: true, payload: updatedTodo });
});

//delete a todo
router.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await deleteTodoById(id);
    res.json({ success: true, payload: deleteTodo });
  } catch (error) {
    console.log("todo is not deleted");
  }
});

export default router;
