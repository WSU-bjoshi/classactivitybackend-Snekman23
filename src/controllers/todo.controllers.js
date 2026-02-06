import {
  getTodos,
  createTodoService,
  toggleTodoByIdService,
  deleteTodoByIdService,
  getTodoByIdService
} from "../services/todo.service.js";

export function listTodos(req, res) {
  const todos = getTodos();
  res.json({ count: todos.length, todos });
}

export function createTodos(req, res) {
  const { task } = req.body;

  try {
    const { task } = req.body;
    const todo = createTodoService(task);
    res.status(201).json({ message: "Created", todo });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export function toggleTodo(req, res) {
  const id = Number(req.params.id);
  const todo = toggleTodoByIdService(id);

  if (!todo){
    return res.status(400).json({ error: "todo not found"});
  }
  res.json({ message: "Toggled", todo });
}

export function getTodo(req, res) {
  const id = Number(req.params.id);
  const todo = getTodoByIdService(id);

  if (!todo) {
    return res.status(400).json({ error: "todo not found" });
  }
  res.json({ message: "Found", task: todo.task, task: todo.done });
}

export function removeTodo(req, res) {
  const id = Number(req.params.id);
  const todo = deleteTodoByIdService(id);

  if (!todo) {
    return res.status(400).json({ error: "todo not found" });
  }

  res.json({ message: "Deleted Succesfully" });
}

//Test