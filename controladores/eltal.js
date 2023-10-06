import { json } from "sequelize";
import { data } from "../module/eltal.model.js";
//controladores instruc-apren---------------------------------------------------
export const GetAll = async (req, res) => {
    try {
      const instructores = await data.findAll();
      res.json(instructores);
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  export const Get = async (req, res) => {
    try {
      const instructor = await data.findAll({
        where: {  id_apren_instruc: req.params.id },
      });
      res.json(instructor[0]);
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
  export const Create = async (req, res) => {
    try {
      await data.create(req.body);
      res.json({ message: "Registro creado" });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
  export const Update = async (req, res) => {
    try {
      await data.update(req.body, {
        where: {  id_apren_instruc: req.params.id },
      });
      res.json({ message: "Registro actualizado" });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
  export const Delete = async (req, res) => {
    try {
      await data.destroy({
        where: { id_apren_instruc: req.params.id },
      });
      res.json({ message: "Registro eliminado" });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  