// Create server

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server Created & Run Successfully");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen("3000", () => {
  console.log("Server is runing on localhost: http://localhost:3000/");
});
