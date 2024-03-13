import express from "express";
import { getServices } from "../controller/serviceController.js";
const router = express.Router();
import { uploadsService } from "../multer/multer.js";

router.get("/services", getServices);
router.post("/services", uploadsService.single("image"), postServices);

export default router;
