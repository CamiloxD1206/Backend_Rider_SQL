import miBase from "../bases/miBaseRider.js";
import { DataTypes } from "sequelize";
//--------aprendiz----------------------------------------------------
export const dataCompetencia = miBase.define(
    "competencia", {
        id_competencia: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_competencia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_resultado: {
            type: DataTypes.INTEGER,
            foreignKey: true,

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
        tableName: "competencia",
        timestamps: true,
    }
);