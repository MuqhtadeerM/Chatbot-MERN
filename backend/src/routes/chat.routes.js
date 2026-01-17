import express from "express";
import protect from "../middleware/auth.middleware.js";
import { chatWithAgent } from "../controllers/chat.controller.js";

const router = express.Router();

// post api/chat/projectID
router.post("/:projectId", protect, chatWithAgent);

export default router;
