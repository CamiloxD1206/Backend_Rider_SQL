import express from "express";
//-----aprendiz-------------------
import {
  GetAllAprendiz,
  GetAprendiz,
  CreateAprendiz,
  UpdateAprendiz,
  DeleteAprendiz,
} from "../controladores/miControlador.js";

//rutas aprendiz-------------------------------------
export const miRutaAprendiz = express.Router();

miRutaAprendiz.get("/", GetAllAprendiz);
miRutaAprendiz.get("/:id", GetAprendiz);
miRutaAprendiz.post("/", CreateAprendiz);
miRutaAprendiz.put("/:id", UpdateAprendiz);
miRutaAprendiz.delete("/:id", DeleteAprendiz);
