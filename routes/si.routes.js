import express from "express";
//----------------------si----------------------
import { Get, GetAll, Create, Update, Delete } from "../controladores/eltal.js";
//rutasinstrucapren-------------------------------------
export const miRutaAprenInstruc = express.Router();

miRutaAprenInstruc.get("/", GetAll);
miRutaAprenInstruc.get("/:id", Get);
miRutaAprenInstruc.post("/", Create);
miRutaAprenInstruc.put("/:id", Update);
miRutaAprenInstruc.delete("/:id", Delete);