import { Request, Response } from 'express';

import knex from '../database/connection';

class PublicController{
    async signIn(request: Request, response: Response){
        const{
            email,
            password
        } = request.body;
 
        const userAlready = await knex('adms').where('email', email).first();

        const handleUser = {
            id: userAlready[0] || 'E',
            email: email,
            password: password
        }

        const user = userAlready ? handleUser : 'Teacher not exist!';

        
        return response.json({
            user
        })
    }
}

export { PublicController }