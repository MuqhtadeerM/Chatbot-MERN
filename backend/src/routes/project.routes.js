import express from "express";
import protect from "../middleware/auth.middleware.js";
import {
  createProject,
  getProjectById,
  getUserProjects,
} from "../controllers/project.controller.js";

const router = express.Router();

// POST api/project-agent creatae post project
router.post("/", protect, createProject);

// get all project for user
router.get("/", protect, getUserProjects);

// get single project by id
router.get("/:id", protect, getProjectById);

export default router;
