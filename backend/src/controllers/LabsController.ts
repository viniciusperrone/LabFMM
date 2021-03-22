import { Request, Response } from  'express';

import knex from '../database/connection';

class LabsController{
    async create(request: Request, response: Response){
        const {
            id_teacher
        } = request.query;

        const {
            laboratory,
            day,
            time
        } = request.body;

        const lab = {
            laboratory: laboratory,
            day: day,
            time: time,
            id_teacher: id_teacher
        }

        const handleBody = lab.laboratory && lab.day && lab.time && lab.id_teacher 
            ? lab 
            : 'Register invalid';

        const register = await knex('labs').insert(handleBody);

        const id = register[0];

        return response.json({
            id,
            ...lab
        });
    }
}

export { LabsController }