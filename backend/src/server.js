import dotenv from "dotenv";

dotenv.config();

// importing express
import express from "express";
import connectDB from "./config/db.js";
import { ENV } from "./config/env.js";
import authRoutes from "./routes/auth.routes.js";
import protectedRoutes from "./routes/protected.routes.js";
import projectRoutes from "./routes/project.routes.js";
import chatRoutes from "./routes/chat.routes.js";

// create express app
const app = express();

// middleware ahndler
app.use(express.json());

// connect to db
connectDB();

// routes
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/chat", chatRoutes);

// create the test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// start the server
app.listen(ENV.PORT, () => {
  console.log(`server is running on port ${ENV.PORT}`);
});
