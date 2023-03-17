import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize('Lottery', process.env.USERDB || 'sa', process.env.PASSDB || '12345', {
    host: 'localhost',
    dialect: 'mssql'
    // logging: false
});

export default db;