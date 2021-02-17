import Knex from 'knex';

export async function seed(knex: Knex){
  await knex('adms').insert([
    { name: 'Vinicius Andrade Perrone',
      email: 'perronevinicius@gmail.com',
      password: '123456'
    }
  ]);
} 