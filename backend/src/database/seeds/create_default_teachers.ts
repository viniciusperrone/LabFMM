import Knex from 'knex';

export async function seed(knex: Knex){
  return await knex('teachers').insert([
    { name: 'José Luiz Gonzaga',
      email: 'joseluiz@gmail.com',
      discipline: 'Banco de Dados',
      password: '123456'
    }
  ]);
} 