import miBase from "../bases/miBaseRider.js";
import { DataTypes } from "sequelize";
//---modelo_resultados----------------------------------------------------
export const dataNotas = miBase.define(
    "notas", {
        id_notas: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nota1: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nota2: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nota3: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: "notas",
        timestamps: true,
    }
);