import { server } from "./http/server";

server.listen(process.env.PORT || 3333, () =>
  console.log("rodando app", process.env.PORT),
);
