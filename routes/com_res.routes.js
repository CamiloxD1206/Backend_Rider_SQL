import express from "express";
//----------------------si----------------------
import {
    GetAllCompetencia_resul,
    GetCompetencia_resul,
    CreateCompetencia_resul,
    UpdateCompetencia_resul,
    DeleteCompetencia_resul,
} from "../controladores/competenciaResultado.js";
//rutasinstrucapren-------------------------------------
export const miRutaCompeResul = express.Router();

miRutaCompeResul.get("/", GetAllCompetencia_resul);
miRutaCompeResul.get("/:id", GetCompetencia_resul);
miRutaCompeResul.post("/", CreateCompetencia_resul);
miRutaCompeResul.put("/:id", UpdateCompetencia_resul);
miRutaCompeResul.delete("/:id", DeleteCompetencia_resul);