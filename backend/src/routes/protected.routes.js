import express from "express";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// get api/protected
router.get("/", protect, (req, res) => {
  res.status(200).json({
    message: "you accessed the protected routes",
    user: req.user,
  });
});

export default router;
