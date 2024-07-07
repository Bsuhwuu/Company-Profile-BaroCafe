import express from "express";
import { getAllTestimoni, addTestimoni } from "../controllers/TestimoniController.js";

const router = express.Router();

// Route untuk mendapatkan semua testimonial
router.get("/testimoni", getAllTestimoni);

// Route untuk menambah testimonial baru
router.post("/testimoni", addTestimoni);

// Route untuk delete bro
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedTestimoni = await Testimoni.destroy({ where: { id } });
      if (deletedTestimoni) {
        res.status(204).send(); // No Content
      } else {
        res.status(404).json({ message: "Testimony not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default router;
