import miBase from "../bases/miBaseRider.js";
import { DataTypes } from "sequelize";
//---modelo_resultados----------------------------------------------------
export const dataResultados = miBase.define(
    "resultados",
    {
      id_resultado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_resultado: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      id_notas: {
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
      tableName: "resultados",
      timestamps: true,
    }
  );
