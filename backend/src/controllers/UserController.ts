import { Request, Response } from  'express';

import knex from '../database/connection';

class UserController{
    async create(request: Request, response: Response){

        const {
            name,
            email,
            discipline,
            password
        } = request.body;

        const teacher = {
            name: name,
            email: email,
            discipline: discipline,
            password: password
        }

        const handleBody = teacher.name.trim().length >= 4 && teacher.email.trim().length > 5 && teacher.discipline.trim().length > 5 && teacher.password.trim().length >= 4 
            ? teacher
            : 'Fields invalid!'
        
        console.log(handleBody);
        
        const register = await knex('teachers').insert(handleBody);

        const id = register[0];

        response.json({
            id,
            ...teacher
        });
    }
}

export { UserController }