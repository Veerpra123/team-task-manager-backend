import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

// CREATE PROJECT (Admin only)
export const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    const project = await prisma.project.create({
      data: {
        name,
        description,
        createdBy: req.user.id,
      },
    });

    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD MEMBER
export const addMember = async (req, res) => {
  try {
    const { projectId, userId } = req.body;

    const member = await prisma.projectMember.create({
      data: {
        projectId,
        userId,
      },
    });

    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET PROJECTS
export const getProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        members: true,
      },
    });

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};