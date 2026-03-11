import { Router } from "express";
import { validateBody } from "../middleware/validate.middleware.js";
import * as authController from "../controllers/auth.controllers.js";

const router = Router();

router.post("/register", validateBody(["name","email","password"]));
router.post("/login", validateBody(["email","password"]));


export default router;
