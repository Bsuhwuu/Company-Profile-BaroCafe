import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/Database.js";
import FileUpload from "express-fileupload";
import ProductRoute from "./routes/ProductRoute.js";
import TestimoniRoutes from "./routes/TestimoniRoutes.js";
import massageRouter from "./routes/MassageRoutes.js";
import galleryRoutes from "./routes/GalleryRoutes.js";
import router from "./routes/index.js";
import textRoutes from "./routes/textRoutes.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log("Database Connected...");
} catch (error) {
    console.error(error);
}



app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(galleryRoutes);
app.use(ProductRoute);
app.use(router);
app.use(massageRouter);
app.use(TestimoniRoutes);
app.use(textRoutes);
app.use(cookieParser());
app.listen(5000, () => console.log("Server Up and Running..."));
