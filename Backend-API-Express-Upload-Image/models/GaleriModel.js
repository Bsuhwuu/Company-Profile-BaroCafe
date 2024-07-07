import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Galeri = db.define('galeri',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.TEXT 
},{
    freezeTableName: true
});

export default Galeri;

(async()=>{
    await db.sync();
})();