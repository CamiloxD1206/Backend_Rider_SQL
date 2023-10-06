import express from "express";
//----------------------si----------------------
import { GetNotas, GetAllNotas, CreateNotas, UpdateNotas, DeleteNotas } from "../controladores/Notas.js";
//rutasinstrucapren-------------------------------------
export const miRutasNotas = express.Router();

miRutasNotas.get("/", GetAllNotas);
miRutasNotas.get("/:id", GetAllNotas);
miRutasNotas.post("/", CreateNotas);
miRutasNotas.put("/:id", UpdateNotas);
miRutasNotas.delete("/:id", DeleteNotas);