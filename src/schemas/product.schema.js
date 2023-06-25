import { z } from "zod";
import { ZOD_VALIDATION_MESSAGE } from "../config.js";

export const createProductSchema = z.object({
  name: z
    .string({
      required_error: ZOD_VALIDATION_MESSAGE.PRODUCT.NAMEISREQUIRED,
    }),
  quantity: z
    .number({
      required_error: ZOD_VALIDATION_MESSAGE.PRODUCT.QUANTITYISREQUIRED,
    }),
  price: z
    .number({
      required_error: ZOD_VALIDATION_MESSAGE.PRODUCT.PRICEISREQUIRED,
    }),
  description: z
    .string({
      required_error: ZOD_VALIDATION_MESSAGE.PRODUCT.DESCRIPTIONISREQUIRED,
    })
});
