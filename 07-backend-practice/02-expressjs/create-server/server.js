import app from "./src/app.js";

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("server created & run successfully");
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
