import mongoose from "mongoose";
import { MONGOOSE_SCHEMA } from "../config.js";

const companySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: MONGOOSE_SCHEMA.USER,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    nit: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(MONGOOSE_SCHEMA.COMPANY, companySchema);
