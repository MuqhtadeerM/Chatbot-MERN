import express from "express";
import protect from "../middleware/auth.middleware.js";
import {
  createProject,
  deleteProject,
  getProjectById,
  getUserProjects,
  updateProject,
} from "../controllers/project.controller.js";

const router = express.Router();

// POST api/project-agent creatae post project
router.post("/", protect, createProject);

// get all project for user
router.get("/", protect, getUserProjects);

// get single project by id
router.get("/:id", protect, getProjectById);

// update theporject
router.put("/:id", protect, updateProject);

// delete project
router.delete("/:id", protect, deleteProject);

export default router;
