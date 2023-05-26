import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BuyersModel = db.define('facturas', {
    cliente: {type: DataTypes.STRING},
    vendedor: {type: DataTypes.STRING},
    producto: {type: DataTypes.STRING},
    cantidad: {type: DataTypes.INTEGER},
    total: {type: DataTypes.DECIMAL}
});

export default BuyersModel