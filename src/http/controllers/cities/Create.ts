import { Request, Response } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
interface ICities {
  name: string;
  state: string;
}

const bodyValidation: yup.Schema<ICities> = yup.object().shape({
  name: yup.string().required().min(3),
  state: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICities>, res: Response) => {
  let validateDate: ICities | undefined = undefined;
  try {
    validateDate = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const ValidationError: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      // error.message, error.path;
      if (!error.path) return;
      ValidationError[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ ValidationError });
  }

  console.log(validateDate);
  return res.send("Create");
};
