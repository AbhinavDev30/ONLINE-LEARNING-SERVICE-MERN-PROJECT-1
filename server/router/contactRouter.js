import express from "express";
import { contactForm } from "../controller/contact-Controller.js";

const router = express.Router();

router.post("/contact", contactForm);
export default router;
