import app from "./app.js";

import dotenv from "dotenv";
import connectDB from "./config/database.js";

import cloudinary from "cloudinary";

//Handling Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

//Connecting to databse
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

//unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});
