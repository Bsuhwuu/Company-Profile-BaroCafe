import Galerikuh from "../models/Galerikuh.js";
import path from "path";
import fs from "fs";

export const getGaleri = async (req, res) => {
    try {
        const response = await Galerikuh.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getGaleriById = async (req, res) => {
    try {
        const response = await Galerikuh.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveGaleri = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
    const { title, description } = req.body;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await Galerikuh.create({ title: title, description: description, image: fileName, url: url });
            res.status(201).json({ msg: "Image Added to Gallery Successfully" });
        } catch (error) {
            console.log(error.message);
        }
    })
}

export const updateGaleri = async (req, res) => {
    const galerikuh = await Galerikuh.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!galerikuh) return res.status(404).json({ msg: "Gallery Item Not Found" });

    let fileName = "";
    if (req.files === null) {
        fileName = galerikuh.image;
    } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
        if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

        const filepath = `./public/images/${galerikuh.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        });
    }
    const { title, description } = req.body;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    try {
        await Galerikuh.update({ title: title, description: description, image: fileName, url: url }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Gallery Item Updated Successfully" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteImageFromGaleri = async (req, res) => {
    const galerikuh = await Galerikuh.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!galerikuh) return res.status(404).json({ msg: "Gallery Item Not Found" });

    try {
        const filepath = `./public/images/${galerikuh.image}`;
        fs.unlinkSync(filepath);
        await Galerikuh.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Gallery Item Deleted Successfully" });
    } catch (error) {
        console.log(error.message);
    }
}
