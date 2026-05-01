import express from "express";
import pkg from "@prisma/client";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

// GET all users
router.get("/", authMiddleware, async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  res.json(users);
});

export default router;