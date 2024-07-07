// routes/textRoutes.js

import express from "express";
import { getText, editText } from "../controllers/TextController.js";

const router = express.Router();

// Mengambil teks
router.get("/text", getText);

// Mengedit teks
router.put("/text", editText);

export default router;
