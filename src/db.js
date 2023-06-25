import mongoose from "mongoose";
import { DICCIONARY, MONGO_URL } from "./config.js";

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(DICCIONARY.DBCONNECTED)
  } catch (error) {
    console.log(error);
  }
};
