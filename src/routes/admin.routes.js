import { Router } from "express";
import { requireAuth } from "../middleware/role.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";

const router = Router();


router.use(requireAuth);
router.use(requireRole("Admin"));