import express from "express";
//resultados----------------------------------------------------
import {
    GetResultados,
    GetAllResultados,
    CreateResultados,
    UpdateResultados,
    DeleteResultados,
  } from "../controladores/resultados.js";
  
//-rutaresultados----------------------------------------------------
export const miRutaResultados = express.Router();

miRutaResultados.get("/", GetAllResultados);
miRutaResultados.get("/:id", GetResultados);
miRutaResultados.post("/", CreateResultados);
miRutaResultados.put("/:id", UpdateResultados);
miRutaResultados.delete("/:id", DeleteResultados);
