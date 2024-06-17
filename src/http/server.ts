import express from "express";

const server = express();

server.get("/", (_, res) => {
  return res.send("ola dev");
});
export { server };
