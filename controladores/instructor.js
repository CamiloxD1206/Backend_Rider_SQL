import { json } from "sequelize";
import { dataInstructor } from "../module/instru.model.js";
//controladores instructor----------------------------------------
export const GetAllInstructores = async (req, res) => {
    try {
      const instructores = await dataInstructor.findAll();
      res.json(instructores);
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  export const GetInstructor = async (req, res) => {
    try {
      const instructor = await dataInstructor.findAll({
        where: { id_instructor: req.params.id },
      });
      res.json(instructor[0]);
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
  export const CreateInstructor = async (req, res) => {
    try {
      await dataInstructor.create(req.body);
      res.json({ message: "Registro creado" });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
  export const UpdateInstructor = async (req, res) => {
    try {
      await dataInstructor.update(req.body, {
        where:  {id_instructor:req.params.id },
      });
      res.json({ message: "Registro actualizado" });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
  export const DeleteInstructor = async (req, res) => {
    try {
      await dataInstructor.destroy({
        where:  {id_instructor: req.params.id },
      });
      res.json({ message: "Registro eliminado" });
    } catch (error) {
      res.json({ message: error.message });
    }
  };