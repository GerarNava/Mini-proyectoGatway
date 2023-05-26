import { Sequelize } from "sequelize";

const db = new Sequelize(
    'clientes',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql',
    }
);

export default db;