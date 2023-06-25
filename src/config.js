export const PORT = 4000;
export const TOKEN_SECRET = "some secret key";
export const TOKEN = "token";
export const API_PREFIX = "/api";
export const MONGO_URL = "mongodb+srv://andresvillanuevatabares:2U0SJr996vlRq91P@crud-auth-v2.civwwxj.mongodb.net/?retryWrites=true&w=majority";
export const CLIENT_URL = "https://crud-auth-v3.netlify.app";
export const CLOUDINARY_NAME = 'dbrusmvop';
export const CLOUDINARY_API_KEY = '829735912485681';
export const CLOUDINARY_API_SECRET = 'e22RJZTEQFVHO7ZFL-5iJkWp50A';
/* export const CLIENT_URL = "http://localhost:5173"; */
export const MONGOOSE_SCHEMA = {
  USER: "User",
  PRODUCT: "Product",
  COMPANY: "Company",
};
export const POPULATE_SCHEMA = {
  USER: "user",
  PRODUCT: "product",
  COMPANY: "company",
};
export const ZOD_VALIDATION_MESSAGE = {
  USER: {
    USERNAMEISREQUIRED: "Username is required",
    EMAILISREQUIRED: "Email is required",
    INVALIDEMAIL: "Invalid Email",
    PASSWORDISREQUIRED: "Password is required",
    ATLEASTSIXCHARACTERS: "Password must be at least 6 characters",
  },
  COMPANY: {
    NAMEISREQUIRED: "Company name is required",
    ADDRESSISREQUIRED: "Company address is required",
    NITISREQUIRED: "Company NIT is required",
    PHONEISREQUIRED: "Company phone is required",
    PHONEISINVALID: "Phone must be at least 13 characters",
  },
  PRODUCT:{
    NAMEISREQUIRED: "Product name is required",
    QUANTITYISREQUIRED: "Product quantity is required",
    PRICEISREQUIRED: "Product price is required",
    DESCRIPTIONISREQUIRED: "Product description is required",
    PHONEISINVALID: "Phone must be at least 6 characters",
  }
};
export const DICCIONARY = {
  USERNOTFOUND: "User not found",
  EMAILALREADYEXISTS: 'The email already exists',
  INVALIDPASSWORD: "Invalid password",
  NOTOKEN: "No token, authrization denied",
  INVALIDTOKEN: "Invalid token",
  DBCONNECTED: ">>> DB is connected",
  SERVERPORT: "Server on port",
  UNAUTHORIZED: "Unauthorized",
  PRODUCTNOTFOUND: "Product not found",
  COMPANYNOTFOUND: "Company not found",
  SERVERERROR: "Somethin went wrong",
};
export const ROUTES = {
  REGISTER: "/register",
  LOGIN: "/login",
  LOGOUT: "/logout",
  PROFILE: "/profile",
  VERIFY: "/auth/verify",
  PRODUCT: "/product",
  PRODUCTS: "/products/:companyId",
  PRODUCTBYID: "/product/:id",
  COMPANY: "/company",
  COMPANIES: "/companies",
  COMPANYBYID: "/company/:id",
};
export const STATUS_CODES = {
  OK: 200,
  NOCONTENT: 204,
  BADREQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  INTERNALSERVERERROR: 500,
};
export const ENVIROMENT = {
  DEV: "dev",
};
