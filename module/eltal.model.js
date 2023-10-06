import miBase from "../bases/miBaseRider.js";
import { DataTypes } from "sequelize";
//model instru apren
export const data = miBase.define(
    "apren_instruc",
    {
      id_apren_instruc: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_aprendiz: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      id_instructor: {
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
    },
    {
      tableName: "apren_instruc",
      timestamps: true,
    }
  );
