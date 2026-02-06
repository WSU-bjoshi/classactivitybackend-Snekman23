import { Router } from "express";

import{listTodos, createTodos, toggleTodo, getTodo, removeTodo} from "../controllers/todo.controllers.js";

const router = Router();

router.get("/", listTodos);
router.post("/", createTodos);
router.patch("/:id/toggle", toggleTodo);
router.get("/:id/", getTodo);
router.delete("/:id/remove", removeTodo);


export default router;

