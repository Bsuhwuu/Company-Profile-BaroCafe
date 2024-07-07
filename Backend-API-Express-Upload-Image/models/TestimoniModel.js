// models/Testimoni.js

import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Testimoni = db.define('testimoni', {
    name: DataTypes.STRING,
    text: DataTypes.TEXT
}, {
    freezeTableName: true
});

export default Testimoni;

(async () => {
    await db.sync(); // Sinkronisasi model dengan database
})();
