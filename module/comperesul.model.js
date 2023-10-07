import miBase from "../bases/miBaseRider.js";
import { DataTypes } from "sequelize";
//--------aprendiz----------------------------------------------------
export const dataCompetenciaResultado = miBase.define(
    "competencia", {
        id_com_res: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_competencia: {
            type: DataTypes.INTEGER,
            foreignKey: true,

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
        tableName: "competencia_resultado",
        timestamps: true,
    }
);