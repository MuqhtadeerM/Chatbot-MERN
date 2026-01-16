import express from "express";
import protect from "../middleware/auth.middleware.js";
import { createProject } from "../controllers/project.controller.js";

const router = express.Router();

// POST api/project-agent
router.post("/", protect, createProject);

export default router;
