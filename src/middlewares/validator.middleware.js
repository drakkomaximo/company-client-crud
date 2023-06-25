import { STATUS_CODES } from "../config.js";

export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res
      .status(STATUS_CODES.BADREQUEST)
      .json(error.errors.map((error) => error.message));
  }
};
