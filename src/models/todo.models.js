import pool from "../db/connection.js";
import Todo from "./Todo.js";

export async function getAllTodos(){
  // const [rows] = await pool.query("SELECT * FROM todos")
  // return rows;
  return await Todo.findAll({order: [["id","ASC"]]});

}



let nextID = 3;

const todos = [
  { id: 1, task: "Try to have fun", done: false },
  { id: 2, task: "Try to have test", done: false },
];

// function getAllTodos() {
//   return todos;
// }

export async function createTodo(task) {
  //   if (!task || typeof task !== "string" || task.trim() === "") {
  //     throw new error("Invalid task")
  //   }
  // const todo = { id: nextID++, task: task.trim(), done: false };
  // todos.push(todo);
  // return todo;

  // const [result] = await pool.query(
  //   "INSERT INTO todos(task) VALUES (?)", [task]
  // );

  // return {id: result.insertId, task, completed:false};


    return await Todo.create({task});

  
}

export async function toggleTodoById(todo) {
  //   const todo = todos.find((t) => t.id === id);

  //   if (!todo) {
  //     return null;
  //   }
  // todo.done = !todo.done;
  // return todo;

    const [result] = await pool.query(
    "UPDATE todos SET completed = true WHERE id = todo ", [todo]
  );
    return {id, task, completed};

}

function deleteTodoById(id) {

  // return todos.splice(id, 1)[0];



  


}

export async function getTodoById(id) {
  //   const todo = todos.find((t) => t.id === id);

  //   if (!todo) {
  //     return null;
  //   }

  // return todo;


    return await Todo.getTodo({id});

}

export default {
  getAllTodos,
  deleteTodoById,
  getTodoById,
};
