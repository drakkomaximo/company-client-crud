import { z } from "zod";
import { ZOD_VALIDATION_MESSAGE } from "../config.js";

export const registerSchema = z.object({
  username: z
    .string({
      required_error: ZOD_VALIDATION_MESSAGE.USER.USERNAMEISREQUIRED,
    }),
  email: z
    .string({
      required_error: ZOD_VALIDATION_MESSAGE.USER.EMAILISREQUIRED,
    })
    .email({
      message: ZOD_VALIDATION_MESSAGE.USER.INVALIDEMAIL,
    }),
  password: z
    .string({
      required_error: ZOD_VALIDATION_MESSAGE.USER.PASSWORDISREQUIRED,
    })
    .min(6, {
      message: ZOD_VALIDATION_MESSAGE.USER.ATLEASTSIXCHARACTERS,
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: ZOD_VALIDATION_MESSAGE.USER.EMAILISREQUIRED,
    })
    .email({
      message: ZOD_VALIDATION_MESSAGE.USER.INVALIDEMAIL,
    }),
  password: z
    .string({
      required_error: ZOD_VALIDATION_MESSAGE.USER.PASSWORDISREQUIRED,
    })
    .min(6, {
      message: ZOD_VALIDATION_MESSAGE.USER.ATLEASTSIXCHARACTERS,
    }),
});
