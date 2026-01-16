import express from "express";
import protect from "../middleware/auth.middleware.js";
import {
  createProject,
  getUserProjects,
} from "../controllers/project.controller.js";

const router = express.Router();

// POST api/project-agent creatae post project
router.post("/", protect, createProject);

// get from project logged in
router.get("/", protect, getUserProjects);

export default router;
