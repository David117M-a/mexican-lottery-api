import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Card = db.define('Card', {
    name: {
        type: DataTypes.STRING
    },
}, {
    timestamps: false
});

export default Card;