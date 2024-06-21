import { Router } from "express";
import { CitiesController } from "../controllers/cities";

// import { StatusCodes } from "http-status-codes";
const router = Router();

router.get("/", (_, res) => {
  return res.send("ola dev");
});

router.post(
  "/cities",
  CitiesController.createBodyValidator,
  CitiesController.create,
);
export { router };
