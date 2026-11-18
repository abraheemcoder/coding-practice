// Create server

import http from "node:http";

const PORT = 3000;
const HOST = "127.0.0.1";

const server = http.createServer((req, res) => {
  res.end("server created successfully");
});

server.listen(PORT, HOST, () => {
  console.log(`server running at http://${HOST}:${PORT}`);
});
