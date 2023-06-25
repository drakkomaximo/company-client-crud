import mongoose from "mongoose";
import { MONGOOSE_SCHEMA } from "../config.js";

const userSchema = new mongoose.Schema(
  {
    username:{
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(MONGOOSE_SCHEMA.USER, userSchema);
