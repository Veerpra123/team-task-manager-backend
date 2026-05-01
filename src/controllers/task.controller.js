import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

// CREATE TASK
export const createTask = async (req, res) => {
  try {
    const { title, description, projectId, assignedTo, dueDate } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        projectId,
        assignedTo,
        dueDate: new Date(dueDate),
        status: "Todo",
      },
    });

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET TASKS BY PROJECT
export const getTasks = async (req, res) => {
  try {
    const { projectId } = req.params;

    const tasks = await prisma.task.findMany({
      where: { projectId: Number(projectId) },
    });

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE STATUS
export const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: { status },
    });

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};