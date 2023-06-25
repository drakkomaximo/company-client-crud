import { Router } from "express";
import {
  login,
  logout,
  register,
  verifyToken
} from "../controllers/auth.controller.js";
import { ROUTES } from "../config.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post(ROUTES.REGISTER, validateSchema(registerSchema), register);
router.post(ROUTES.LOGIN, validateSchema(loginSchema), login);
router.get(ROUTES.VERIFY, verifyToken);
router.post(ROUTES.LOGOUT, logout);

export default router;
