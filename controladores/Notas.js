import { json } from "sequelize";
import { dataNotas} from "../module/notas.model.js";
//controladores Notas----------------------------------------
export const GetAllNotas = async (req, res) => {
  try {
    const notas = await dataNotas.findAll();
    res.json(notas);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const GetNotas = async (req, res) => {
  try {
    const notas = await dataNotas.findAll({
      where: { id_notas: req.params.id },
    });
    res.json(notas[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const CreateNotas = async (req, res) => {
  try {
    await dataNotas.create(req.body);
    res.json({ message: "Registro creado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const UpdateNotas = async (req, res) => {
  try {
    await dataNotas.update(req.body, {
      where: { id_notas: req.params.id },
    });
    res.json({ message: "Registro actualizado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const DeleteNotas = async (req, res) => {
  try {
    await dataNotas.destroy({
      where: { id_notas: req.params.id },
    });
    res.json({ message: "Registro eliminado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
