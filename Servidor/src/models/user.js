import Sequelize from 'sequelize';
import {db} from '../database/db.js';

export const User = db.define('users2s', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING
}, {
    timestamps: false
});