import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import comapnyRoutes from "./routes/company.routes.js";
import { API_PREFIX, CLIENT_URL, ENVIROMENT } from "./config.js";

const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);
app.use(morgan(ENVIROMENT.DEV));
app.use(express.json());
app.use(cookieParser());

app.use(API_PREFIX, authRoutes);
app.use(API_PREFIX, productRoutes);
app.use(API_PREFIX, comapnyRoutes);

export default app;
