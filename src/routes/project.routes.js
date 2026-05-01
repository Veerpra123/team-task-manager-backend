import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import {
  createProject,
  addMember,
  getProjects,
} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("Admin"), createProject);
router.post("/add-member", authMiddleware, roleMiddleware("Admin"), addMember);
router.get("/", authMiddleware, getProjects);

export default router;