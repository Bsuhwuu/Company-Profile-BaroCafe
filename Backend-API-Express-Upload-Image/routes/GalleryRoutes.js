import express from "express";
import {
  getGaleri,
  getGaleriById,
  saveGaleri,
  updateGaleri,
  deleteImageFromGaleri,
} from "../controllers/GalleryController.js";

const router = express.Router();

router.get("/galeri", getGaleri);
router.get("/galeri/:id", getGaleriById);
router.post("/galeri", saveGaleri);
router.patch("/galeri/:id", updateGaleri);
router.delete("/galeri/:id", deleteImageFromGaleri);

export default router;
