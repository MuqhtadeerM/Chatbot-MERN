// importing express
import express from "express";

// create express app
const app = express();

// create the test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// start the server
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
