import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export const getDashboard = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();

    const total = tasks.length;

    const completed = tasks.filter(t => t.status === "Done").length;

    const pending = tasks.filter(t => t.status !== "Done").length;

    const overdue = tasks.filter(
      t => new Date(t.dueDate) < new Date() && t.status !== "Done"
    ).length;

    res.json({
      total,
      completed,
      pending,
      overdue,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};