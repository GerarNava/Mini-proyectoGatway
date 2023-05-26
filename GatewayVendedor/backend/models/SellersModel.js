import db from "../database/db.js";
import { DataTypes } from "sequelize";

const SellersModel = db.define('vendedores', {
    nombre: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    contrasena: {type: DataTypes.STRING}
});

export default SellersModel