import { Sequelize } from "sequelize";


const db = new Sequelize('evlisms','root','Lostoflove90', {
    dialect: "mysql",
    port: '3307',
});

export default db;