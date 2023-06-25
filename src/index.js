import app from "./app.js";
import { DICCIONARY, PORT } from "./config.js";
import { connectDb } from "./db.js";

connectDb();
app.listen(PORT);
console.log(DICCIONARY.SERVERPORT, PORT);
