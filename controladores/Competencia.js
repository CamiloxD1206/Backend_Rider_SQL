import { json } from "sequelize";
import { dataCompetencia } from "../module/competencia.model.js";
//controladores instruc-apren---------------------------------------------------
export const GetAllCompetencia = async(req, res) => {
    try {
        const instructores = await dataCompetencia.findAll();
        res.json(instructores);
    } catch (error) {
        res.json({ message: error.message });
    }
};
export const GetCompetencia = async(req, res) => {
    try {
        const instructor = await dataCompetencia.findAll({
            where: { id_competencia: req.params.id },
        });
        res.json(instructor[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const CreateCompetencia = async(req, res) => {
    try {
        await dataCompetencia.create(req.body);
        res.json({ message: "Competencia creada" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const UpdateCompetencia = async(req, res) => {
    try {
        await dataCompetencia.update(req.body, {
            where: { id_competencia: req.params.id },
        });
        res.json({ message: "Competencia actualizada" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const DeleteCompetencia = async(req, res) => {
    try {
        await dataCompetencia.destroy({
            where: { id_competencia: req.params.id },
        });
        res.json({ message: "Competencia eliminada" });
    } catch (error) {
        res.json({ message: error.message });
    }
};