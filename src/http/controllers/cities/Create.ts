import { Request, Response } from "express";
import * as yup from "yup";

interface ICities {
  name: string;
}

const bodyValidation: yup.Schema<ICities> = yup.object().shape({
  name: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICities>, res: Response) => {
  let validateDate: ICities | undefined = undefined;
  try {
    validateDate = await bodyValidation.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;
    return res.json({
      errors: {
        default: yupError.message,
      },
    });
  }

  console.log(validateDate);
  return res.send("Create");
};
