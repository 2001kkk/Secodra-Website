import express from "express";
import { submitMessage, getMessages } from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", submitMessage);
router.get("/messages", getMessages); // for admin

export default router;
