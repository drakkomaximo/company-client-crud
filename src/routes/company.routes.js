import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { ROUTES } from "../config.js";
import {
  createCompany,
  deleteCompany,
  getCompany,
  getCompanies,
  updateCompany,
} from "../controllers/company.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createCompanySchema } from "../schemas/company.schema.js";

const router = Router();

router.get(ROUTES.COMPANIES, authRequired, getCompanies);
router.get(ROUTES.COMPANYBYID, authRequired, getCompany);
router.post(
  ROUTES.COMPANY,
  authRequired,
  validateSchema(createCompanySchema),
  createCompany
);
router.put(ROUTES.COMPANYBYID, authRequired, updateCompany);
router.delete(ROUTES.COMPANYBYID, authRequired, deleteCompany);

export default router;
