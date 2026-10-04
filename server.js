import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";
import { handleGet } from "./handlers/routeHandlers.js";

const PORT = 8000;
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    handleGet(res);
  }

  if (!req.url.startsWith("/api")) {
    return await serveStatic(__dirname, req, res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
