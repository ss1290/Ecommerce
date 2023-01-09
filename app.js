import cookieParser from "cookie-parser";
import express from "express";
const app = express();
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";

import errorMiddleware from "./middleware/error.js";

//config
dotenv.config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route imports
import product from "./routes/productRoute.js";
import user from "./routes/userRoute.js";
import order from "./routes/orderRoute.js";
import payment from "./routes/paymentRoute.js";

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

//Middleware for Errors
app.use(errorMiddleware);

export default app;
