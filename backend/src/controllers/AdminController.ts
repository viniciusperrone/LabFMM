import { Request, Response } from  'express';

import knex from '../database/connection';

class AdminController{

    async create(request: Request, response: Response){
        const {
            name,
            email,
            password
        } = request.body;

        const admin = {
            name: name,
            email: email,
            password: password
        }

        const handleRegister = 
            admin.name.trim().length > 5 && admin.email.trim().length > 5 && admin.password.trim().length > 5
            ? admin 
            : 'Register Invalid!';

        const register = await knex('adms').insert(handleRegister);

        const id = register[0];

        return response.json({
            id,
            ...admin
        });
        
    }

}

export { AdminController };