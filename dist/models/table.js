"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Table = connection_1.default.define('Table', {
    card1: {
        type: sequelize_1.DataTypes.INTEGER
    },
    card2: {
        type: sequelize_1.DataTypes.STRING
    },
    card3: {
        type: sequelize_1.DataTypes.STRING
    },
    card4: {
        type: sequelize_1.DataTypes.STRING
    },
    card5: {
        type: sequelize_1.DataTypes.STRING
    },
    card6: {
        type: sequelize_1.DataTypes.STRING
    },
    card7: {
        type: sequelize_1.DataTypes.STRING
    },
    card8: {
        type: sequelize_1.DataTypes.STRING
    },
    card9: {
        type: sequelize_1.DataTypes.STRING
    },
    card10: {
        type: sequelize_1.DataTypes.STRING
    },
    card11: {
        type: sequelize_1.DataTypes.STRING
    },
    card12: {
        type: sequelize_1.DataTypes.STRING
    },
    card13: {
        type: sequelize_1.DataTypes.STRING
    },
    card14: {
        type: sequelize_1.DataTypes.STRING
    },
    card15: {
        type: sequelize_1.DataTypes.STRING
    },
    card16: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
Table.removeAttribute('id');
exports.default = Table;
//# sourceMappingURL=table.js.map