import { json } from "sequelize";
import { dataAprendiz } from "../module/modeloRider.js";
//controladores aprendiz----------------------------------------
export const GetAllAprendiz = async (req, res) => {
  try {
    const aprendices = await dataAprendiz.findAll();
    res.json(aprendices);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const GetAprendiz = async (req, res) => {
  try {
    const aprendiz = await dataAprendiz.findAll({
      where: { id_aprendiz: req.params.id },
    });
    res.json(aprendiz[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const CreateAprendiz = async (req, res) => {
  try {
    await dataAprendiz.create(req.body);
    res.json({ message: "Registro creado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const UpdateAprendiz = async (req, res) => {
  try {
    await dataAprendiz.update(req.body, {
      where: { id_aprendiz: req.params.id },
    });
    res.json({ message: "Registro actualizado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const DeleteAprendiz = async (req, res) => {
  try {
    await dataAprendiz.destroy({
      where: { id_aprendiz: req.params.id },
    });
    res.json({ message: "Registro eliminado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
