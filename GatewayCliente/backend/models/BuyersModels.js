import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BuyersModel = db.define('clientes', {
    nombre: {type: DataTypes.STRING},
    apellido: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    direccion: {type: DataTypes.STRING},
    ciudad: {type: DataTypes.STRING},
    pais: {type: DataTypes.STRING}
});

export default BuyersModel