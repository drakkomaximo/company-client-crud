import { DICCIONARY, POPULATE_SCHEMA, STATUS_CODES } from "../config.js";
import Company from "../models/company.model.js";

export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find({
      user: req.user.id,
    }).populate(POPULATE_SCHEMA.USER);
    res.json(companies);
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNALSERVERERROR)
      .json({ message: DICCIONARY.SERVERERROR });
  }
};
export const getCompany = async (req, res) => {
  try {
    const CompanyFound = await Company.findById(req.params.id).populate(
      POPULATE_SCHEMA.USER
    );
    if (!CompanyFound)
      return res
        .status(STATUS_CODES.NOTFOUND)
        .json({ message: DICCIONARY.COMPANYNOTFOUND });
    res.json(CompanyFound);
  } catch (error) {
    return res
      .status(STATUS_CODES.NOTFOUND)
      .json({ message: DICCIONARY.COMPANYNOTFOUND });
  }
};
export const createCompany = async (req, res) => {
  try {
    const { name, address, nit, phone } = req.body;
    const newCompany = new Company({
      name,
      address,
      nit,
      phone,
      user: req.user.id,
    });
    const savedCompany = await newCompany.save();
    res.json(savedCompany);
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNALSERVERERROR)
      .json({ message: DICCIONARY.SERVERERROR });
  }
};
export const updateCompany = async (req, res) => {
  try {
    const CompanyFound = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!CompanyFound)
      return res
        .status(STATUS_CODES.NOTFOUND)
        .json({ message: DICCIONARY.COMPANYNOTFOUND });
    res.json(CompanyFound);
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNALSERVERERROR)
      .json({ message: DICCIONARY.SERVERERROR });
  }
};
export const deleteCompany = async (req, res) => {
  try {
    const CompanyFound = await Company.findByIdAndDelete(req.params.id);
    if (!CompanyFound)
      return res
        .status(STATUS_CODES.NOTFOUND)
        .json({ message: DICCIONARY.COMPANYNOTFOUND });
    return res.sendStatus(STATUS_CODES.NOCONTENT);
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNALSERVERERROR)
      .json({ message: DICCIONARY.SERVERERROR });
  }
};
