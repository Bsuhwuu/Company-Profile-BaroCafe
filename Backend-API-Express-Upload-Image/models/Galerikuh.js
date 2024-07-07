import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Galerikuh = db.define('galerikuh', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.TEXT 
}, {
    freezeTableName: true
});

export default Galerikuh;

(async () => {
    await db.sync();
})();
