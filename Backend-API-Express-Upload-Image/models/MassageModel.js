// models/MassageModel.js

import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Massage = db.define('massage', {
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default Massage;

(async () => {
    await db.sync(); // Sinkronisasi model dengan database
})();
