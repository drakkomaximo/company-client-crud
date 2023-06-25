import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { ROUTES } from "../config.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
/* import { validateSchema } from "../middlewares/validator.middleware.js";
import { createProductSchema } from "../schemas/product.schema.js"; */
import fileUpload from "express-fileupload";

const router = Router();

router.get(ROUTES.PRODUCTS, authRequired, getProducts);
router.get(ROUTES.PRODUCTBYID, authRequired, getProduct);
router.post(
  ROUTES.PRODUCT,
  authRequired,
  /* validateSchema(createProductSchema), */
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  createProduct
);
router.put(ROUTES.PRODUCTBYID, authRequired, updateProduct);
router.delete(ROUTES.PRODUCTBYID, authRequired, deleteProduct);

export default router;
