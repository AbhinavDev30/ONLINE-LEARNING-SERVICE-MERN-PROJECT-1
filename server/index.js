import express from "express";
const app = express();
import userRoutes from "./router/userRouter.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
// import contactRouter from "./router/contactRouter.js";
import cors from "cors";
import {
  ServiceDetails,
  getService,
  saveService,
} from "./controller/serveController.js";
import multer from "multer";

// import { getDatabase } from "./Database/Database.js";

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
dotenv.config();
app.use(cors(corsOptions));
app.use(express.json());

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

//this is a line of code used to parse the incomming request bodies wirh json
//Jab json data ayega jayega thab koi problem na ho.

app.use("/api/user", userRoutes);

app.get("/serviceData", getService);

app.get("/serviceDetail", ServiceDetails);

//Service routing
const storageServe = multer.diskStorage({
  destination: "uploadServ/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const uploadServ = multer({ storage: storageServe });

app.post("/serviceDataImg", uploadServ.single("image"), saveService);

// app.use("/api/form", contactRouter);

// import Services from "../model/serviceSchema.js";
