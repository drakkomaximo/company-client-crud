import { z } from "zod";
import { ZOD_VALIDATION_MESSAGE } from "../config.js";

export const createCompanySchema = z.object({
  name: z
    .string({
      required_error: ZOD_VALIDATION_MESSAGE.COMPANY.NAMEISREQUIRED,
    }),
  address: z
    .string({
      required_error: ZOD_VALIDATION_MESSAGE.COMPANY.ADDRESSISREQUIRED,
    }),
  nit: z
    .string({
      required_error: ZOD_VALIDATION_MESSAGE.COMPANY.NITISREQUIRED,
    }),
  phone: z
    .string({
      required_error: ZOD_VALIDATION_MESSAGE.COMPANY.PHONEISREQUIRED,
    })
    .min(11, {
      message: ZOD_VALIDATION_MESSAGE.COMPANY.PHONEISINVALID,
    }),
});
