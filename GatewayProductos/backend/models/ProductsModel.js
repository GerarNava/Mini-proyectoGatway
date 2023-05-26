import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ProductsModel = db.define('productos', {
    nombre: {type: DataTypes.STRING},
    color: {type: DataTypes.STRING},
    marca: {type: DataTypes.STRING},
    talla: {type: DataTypes.STRING},
    precio: {type: DataTypes.DECIMAL}
});

export default ProductsModel