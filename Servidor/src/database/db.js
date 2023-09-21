import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const db = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        dialect: "mysql",
        port: parseInt(process.env.MYSQL_PORT),
        host: process.env.MYSQL_HOST 
    }
);
export const connectDB = async () => {
    try {
        await db.authenticate();
        console.log("Conexão estabelicida com sucesso!");
    }
    catch (error) {
        console.log("Error: ", error);
    }
};