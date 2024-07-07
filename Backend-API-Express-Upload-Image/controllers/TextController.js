// controllers/textController.js

import TextModel from "../models/textModel.js";

// Mengambil teks
export const getText = async (req, res) => {
    try {
        const text = await TextModel.findOne();
        res.json(text);
    } catch (error) {
        console.error("Error fetching text: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Mengedit teks
export const editText = async (req, res) => {
    const { content } = req.body;
    try {
        const updatedText = await TextModel.findOne();
        if (updatedText) {
            updatedText.content = content;
            await updatedText.save();
            res.json(updatedText);
        } else {
            res.status(404).json({ error: "Text not found" });
        }
    } catch (error) {
        console.error("Error updating text: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
