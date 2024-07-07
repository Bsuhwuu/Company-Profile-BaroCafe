import Testimoni from "../models/TestimoniModel.js";

// Mendapatkan semua testimonial
export const getAllTestimoni = async (req, res) => {
    try {
        const testimoniList = await Testimoni.findAll();
        res.json(testimoniList);
    } catch (error) {
        console.error("Error fetching testimonial: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Menambah testimonial baru
export const addTestimoni = async (req, res) => {
    const { name, text } = req.body;
    try {
        const newTestimoni = await Testimoni.create({ name, text });
        res.status(201).json(newTestimoni);
    } catch (error) {
        console.error("Error adding testimonial: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Menghapus testimoni
export const deleteTestimoni = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Hapus testimoni dari database berdasarkan ID
      await Testimoni.destroy({ where: { id } });
      res.status(200).json({ message: "Testimoni berhasil dihapus" });
    } catch (error) {
      console.error("Error deleting testimonial: ", error);
      res.status(500).json({ message: "Gagal menghapus testimoni" });
    }
  };
