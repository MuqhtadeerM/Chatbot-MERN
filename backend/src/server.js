import dotenv from "dotenv";

dotenv.config();

// importing express
import express from "express";
import connectDB from "./config/db.js";
import { ENV } from "./config/env.js";
import authRoutes from "./routes/auth.routes.js";
import protectedRoutes from "./routes/protected.routes.js";

// create express app
const app = express();

// middleware ahndler
app.use(express.json());

// connect to db
connectDB();

// routes
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

// create the test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// start the server
app.listen(ENV.PORT, () => {
  console.log(`server is running on port ${ENV.PORT}`);
});
