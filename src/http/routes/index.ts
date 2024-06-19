import { Router } from "express";

// import { StatusCodes } from "http-status-codes";
import { CitiesController } from "./../controllers/";
const router = Router();

router.get("/", (_, res) => {
  return res.send("ola dev");
});

router.post("/cities", CitiesController.create);
export { router };
