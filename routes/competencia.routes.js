import express from "express";
//----------------------si----------------------
import { GetAllCompetencia, GetCompetencia, CreateCompetencia, UpdateCompetencia, DeleteCompetencia } from "../controladores/Competencia.js";
//rutasinstrucapren-------------------------------------
export const miRutaCompetencia = express.Router();

miRutaCompetencia.get("/", GetAllCompetencia);
miRutaCompetencia.get("/:id", GetCompetencia);
miRutaCompetencia.post("/", CreateCompetencia);
miRutaCompetencia.put("/:id", UpdateCompetencia);
miRutaCompetencia.delete("/:id", DeleteCompetencia);