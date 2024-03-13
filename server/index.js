import express from "express";
const app = express();
import userRoutes from "./router/userRouter.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import contactRouter from "./router/contactRouter.js";
import cors from "cors";
import serviceRouter from "./router/serviceRouter.js";

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
dotenv.config();
app.use(cors(corsOptions));

app.use(express.json());
//this is a line of code used to parse the incomming request bodies wirh json
//Jab json data ayega jayega thab koi problem na ho.

app.use("/api/user", userRoutes);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);

app.use(errorMiddleware);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log("Database connection error");
  });
