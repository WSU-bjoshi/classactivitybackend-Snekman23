import todoModels from "../models/todo.models.js";

export async function getTodos() {
  return await todoModels.getAllTodos();
}

function createTodoService(task) {
  if (!task || typeof task !== "string" || task.trim() === "") {
    throw new error("Invalid task");
  }

  return todoModels.createTodo(task);
}

function toggleTodoByIdService(id) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return null;
  }
  return todoModels.toggleTodoById(todo);
}

function deleteTodoByIdService(id) {
    const todoIndex = todos.find((t) => t.id === id);
    if (todoIndex === -1) {
      return null;
    }

    return todoModels.deleteTodoById(todoIndex);
}


function getTodoByIdService(id) {
    const todo = todos.find((t) => t.id === id);

    if (!todo) {
      return null;
    }
    return todoModels.getTodoById(id);

}


export {
  createTodoService,
  toggleTodoByIdService,
  deleteTodoByIdService,
  getTodoByIdService
  
}