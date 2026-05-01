import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  createTask,
  getTasks,
  updateTaskStatus,
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", authMiddleware, createTask);
router.get("/:projectId", authMiddleware, getTasks);
router.put("/:id", authMiddleware, updateTaskStatus);

export default router;