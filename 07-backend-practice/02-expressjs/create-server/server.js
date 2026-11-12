import app from "./src/app.js";

const port = 3000;

app.get("/", (req, res) => {
  res.send("Server created & run successfully");
});

app.listen(3000, () => {
  console.log(`server is runing on port ${port}`);
});
