// Routing

import http from "node:http";
import path from "node:path";

const PORT = 3000;
const HOST = "127.0.0.1";

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const pathname = new URL(url, "http://localhost").pathname;

  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (method === "GET" && pathname === "/") {
    res.writeHead(200);
    return res.end(JSON.stringify({ message: "This is home page." }));
  }

  if (method === "GET" && pathname === "/about") {
    res.writeHead(200);
    return res.end(
      JSON.stringify({
        message: "This is about page.",
      }),
    );
  }

  if (method === "GET" && pathname === "/user") {
    res.writeHead(200);
    return res.end(
      JSON.stringify({
        username: "Abdul Raheem",
        age: 20,
      }),
    );
  }

  res.writeHead(404);
  return res.end(
    JSON.stringify({
      message: "404, Page not Found",
    }),
  );
});

server.listen(PORT, HOST, () => {
  console.log(`server running at http://${HOST}:${PORT}`);
});
