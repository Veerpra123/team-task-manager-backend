import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import projectRoutes from "./routes/project.routes.js";
import taskRoutes from "./routes/task.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express(); // ✅ create app FIRST

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes); // ✅ now it's valid
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

export default app;