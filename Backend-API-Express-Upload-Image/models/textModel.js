// models/TextModel.js

import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const TextModel = db.define('text', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default TextModel;

(async () => {
    await db.sync(); // Sinkronisasi model dengan database
})();
