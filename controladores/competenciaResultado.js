import { json } from "sequelize";
import { dataCompetenciaResultado } from "../module/comperesul.model.js";

export const GetAllCompetencia_resul = async(req, res) => {
    try {
        const instructores = await dataCompetenciaResultado.findAll();
        res.json(instructores);
    } catch (error) {
        res.json({ message: error.message });
    }
};
export const GetCompetencia_resul = async(req, res) => {
    try {
        const instructor = await dataCompetenciaResultado.findAll({
            where: { id_com_res: req.params.id },
        });
        res.json(instructor[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const CreateCompetencia_resul = async(req, res) => {
    try {
        await dataCompetenciaResultado.create(req.body);
        res.json({ message: "Resultados de Competencias" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const UpdateCompetencia_resul = async(req, res) => {
    try {
        await dataCompetenciaResultado.update(req.body, {
            where: { id_com_res: req.params.id },
        });
        res.json({ message: "Resultado de Competencias actualizado" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const DeleteCompetencia_resul = async(req, res) => {
    try {
        await dataCompetenciaResultado.destroy({
            where: { id_com_res: req.params.id },
        });
        res.json({ message: "Resultado de Competencia eliminado" });
    } catch (error) {
        res.json({ message: error.message });
    }
};