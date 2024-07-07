// controllers/MassageController.js

import Massage from "../models/MassageModel.js";

// Mendapatkan semua massage
export const getAllMassage = async (req, res) => {
    try {
        const massageList = await Massage.findAll();
        res.json(massageList);
    } catch (error) {
        console.error("Error fetching massage: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Menambah massage baru
export const addMassage = async (req, res) => {
    const { text } = req.body;
    try {
        const newMassage = await Massage.create({ text });
        res.status(201).json(newMassage);
    } catch (error) {
        console.error("Error adding massage: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Menghapus massage
export const deleteMassage = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Hapus massage dari database berdasarkan ID
      await Massage.destroy({ where: { id } });
      res.status(200).json({ message: "Massage berhasil dihapus" });
    } catch (error) {
      console.error("Error deleting massage: ", error);
      res.status(500).json({ message: "Gagal menghapus massage" });
    }
};
