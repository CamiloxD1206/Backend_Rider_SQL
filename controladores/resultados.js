import { json } from "sequelize";
import { dataResultados } from "../module/resultados.model.js";
//controladores instructor----------------------------------------
export const GetAllResultados = async(req, res) => {
    try {
        const resultados = await dataResultados.findAll();
        res.json(resultados);
    } catch (error) {
        res.json({ message: error.message });
    }
};
export const GetResultados = async(req, res) => {
    try {
        const instructor = await dataResultados.findAll({
            where: { id_resultado: req.params.id },
        });
        res.json(instructor[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const CreateResultados = async(req, res) => {
    try {
        await dataResultados.create(req.body);
        res.json({ message: "Resultado creado" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const UpdateResultados = async(req, res) => {
    try {
        await dataResultados.update(req.body, {
            where: { id_resultado: req.params.id },
        });
        res.json({ message: "Resultado actualizado" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const DeleteResultados = async(req, res) => {
    try {
        await dataResultados.destroy({
            where: { id_resultado: req.params.id },
        });
        res.json({ message: "Resultado eliminado" });
    } catch (error) {
        res.json({ message: error.message });
    }
};