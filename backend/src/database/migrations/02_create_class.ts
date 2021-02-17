import Knex from 'knex';

export async function up(knex: Knex) {
  knex.schema.createTable('labs', table => {
    table.increments('id').primary();
    table.integer('laboratory').notNullable();
    table.string('day').notNullable().unique();
    table.string('time').notNullable();
    table.string('id_teacher')
      .notNullable()
      .references('id')
      .inTable('teachers')
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('labs');
}