import Knex from 'knex';

export async function up(knex: Knex) {
  knex.schema.createTable('adms', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable(); 
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('adms');
}