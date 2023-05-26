import { Sequelize } from "sequelize";

const db = new Sequelize(
    'facturas',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql',
    }
);

export default db;