import Knex from 'knex';

export async function seed(knex: Knex){
  await knex('teacher').insert([
    { name: 'José Luiz Gonzaga',
      email: 'joseluiz@gmail.com',
      disciplina: 'Banco de Dados',
      password: '123456'
    }
  ]);
} 