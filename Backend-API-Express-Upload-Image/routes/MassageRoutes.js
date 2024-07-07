// routes/MassageRoutes.js

import express from "express";
import { getAllMassage, addMassage, deleteMassage } from "../controllers/MassageController.js";

const router = express.Router();

router.get("/massage", getAllMassage);
router.post("/massage", addMassage);
router.delete("/massage/:id", deleteMassage);

export default router;
