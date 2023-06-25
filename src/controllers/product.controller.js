import { deleteImage, uploadImage } from "../libs/cloudinary.js";
import { DICCIONARY, STATUS_CODES } from "../config.js";
import Product from "../models/product.model.js";
import fs from "fs-extra";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({
      companyId: req.params.companyId,
    });
    res.json(products);
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNALSERVERERROR)
      .json({ message: DICCIONARY.SERVERERROR });
  }
};
export const getProduct = async (req, res) => {
  try {
    const productFound = await Product.findById(req.params.id);
    if (!productFound)
      return res
        .status(STATUS_CODES.NOTFOUND)
        .json({ message: DICCIONARY.PRODUCTNOTFOUND });
    res.json(productFound);
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNALSERVERERROR)
      .json({ message: DICCIONARY.SERVERERROR });
  }
};
export const createProduct = async (req, res) => {
  try {
    const { name, quantity, price, description, companyId } = req.body;

    let image

    if (req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
    }

    const newProduct = new Product({
      name,
      quantity,
      price,
      description,
      companyId,
      image
    });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNALSERVERERROR)
      .json({ message: DICCIONARY.SERVERERROR });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const productFound = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!productFound)
      return res
        .status(STATUS_CODES.NOTFOUND)
        .json({ message: DICCIONARY.PRODUCTNOTFOUND });
    res.json(productFound);
  } catch (error) {
    return res
      .status(STATUS_CODES.INTERNALSERVERERROR)
      .json({ message: DICCIONARY.SERVERERROR });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productFound = await Product.findByIdAndDelete(req.params.id);
    if (!productFound)
      return res
        .status(STATUS_CODES.NOTFOUND)
        .json({ message: DICCIONARY.PRODUCTNOTFOUND });

    if (productFound.image.public_id) {
      await deleteImage(productFound.image.public_id);
    }

    return res.sendStatus(STATUS_CODES.NOCONTENT);
  } catch (error) {
    res
      .status(STATUS_CODES.NOTFOUND)
      .json({ message: DICCIONARY.COMPANYNOTFOUND });
  }
};
