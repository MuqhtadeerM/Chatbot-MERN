import dotenv from "dotenv";

dotenv.config();

// importing express
import express from "express";
import connectDB from "./config/db.js";
import { ENV } from "./config/env.js";

// create express app
const app = express();

// connect to db
connectDB();

// create the test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// start the server
app.listen(ENV.PORT, () => {
  console.log(`server is running on port ${ENV.PORT}`);
});
