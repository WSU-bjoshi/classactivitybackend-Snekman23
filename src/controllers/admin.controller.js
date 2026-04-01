import { User, Todo} from "../models/index.js";

export async function listAllTodos(req, res, next) {
  try{
    const todos = await adminTodoService.getAllTodosService();
    return res.status(200).json({todos});
  }
  catch(error)
    
}