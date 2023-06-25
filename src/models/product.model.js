import mongoose from "mongoose";
import { MONGOOSE_SCHEMA } from "../config.js";

const productSchema = new mongoose.Schema(
  {
    companyId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      public_id: String,
      secure_url: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(MONGOOSE_SCHEMA.PRODUCT, productSchema);
