import { Router } from "express";

// import {listTodos, createUserTodos, toggleTodo, removeTodo } from "../controllers/todo.controllers.js";

import * as todoController from "../controllers/todo.controllers.js";

import { validateBody } from "../middleware/validate.middleware.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js"

const router = Router();


router.get("/", listTodos);
router.post("/", createTodos);
router.patch("/:id/toggle", toggleTodo);
router.get("/:id/", getTodo);
router.delete("/:id/remove", removeTodo);


export default router;

