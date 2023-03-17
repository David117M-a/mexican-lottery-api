import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Table = db.define('Table', {
    card1: {
        type: DataTypes.INTEGER
    },
    card2: {
        type: DataTypes.STRING
    },
    card3: {
        type: DataTypes.STRING
    },
    card4: {
        type: DataTypes.STRING
    },
    card5: {
        type: DataTypes.STRING
    },
    card6: {
        type: DataTypes.STRING
    },
    card7: {
        type: DataTypes.STRING
    },
    card8: {
        type: DataTypes.STRING
    },
    card9: {
        type: DataTypes.STRING
    },
    card10: {
        type: DataTypes.STRING
    },
    card11: {
        type: DataTypes.STRING
    },
    card12: {
        type: DataTypes.STRING
    },
    card13: {
        type: DataTypes.STRING
    },
    card14: {
        type: DataTypes.STRING
    },
    card15: {
        type: DataTypes.STRING
    },
    card16: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

Table.removeAttribute('id');

export default Table;