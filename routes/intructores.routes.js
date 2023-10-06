import express from "express";
//-------------instructor-----------------------------------
import {
    GetAllInstructores,
    GetInstructor,
    CreateInstructor,
    UpdateInstructor,
    DeleteInstructor,
  } from "../controladores/instructor.js";
  //rutasinstructor-------------------------------------
export const miRutaInstructor = express.Router();

miRutaInstructor.get("/", GetAllInstructores);
miRutaInstructor.get("/:id", GetInstructor);
miRutaInstructor.post("/", CreateInstructor);
miRutaInstructor.put("/:id", UpdateInstructor);
miRutaInstructor.delete("/:id", DeleteInstructor);
//rutasinstrucapren---------------------------------