import pool from "../db/connection.js";


export async function getAllTodos(){
  const [rows] = await pool.query("SELECT * FROM todos")
  return rows;

}



let nextID = 3;

const todos = [
  { id: 1, task: "Try to have fun", done: false },
  { id: 2, task: "Try to have test", done: false },
];

// function getAllTodos() {
//   return todos;
// }

function createTodo(task) {
  //   if (!task || typeof task !== "string" || task.trim() === "") {
  //     throw new error("Invalid task")
  //   }
  const todo = { id: nextID++, task: task.trim(), done: false };
  todos.push(todo);
  return todo;
}

function toggleTodoById(todo) {
  //   const todo = todos.find((t) => t.id === id);

  //   if (!todo) {
  //     return null;
  //   }
  todo.done = !todo.done;
  return todo;
}

function deleteTodoById(id) {

  return todos.splice(id, 1)[0];
}

function getTodoById(id) {
  //   const todo = todos.find((t) => t.id === id);

  //   if (!todo) {
  //     return null;
  //   }

  return todo;
}

export default {
  getAllTodos,
  createTodo,
  toggleTodoById,
  deleteTodoById,
  getTodoById,
};
