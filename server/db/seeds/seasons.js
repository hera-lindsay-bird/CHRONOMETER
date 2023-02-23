/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('seasons').del()
  await knex('seasons').insert([
    { id: 1, season: 'summer' },
    { id: 2, season: 'winter' },
    { id: 3, season: 'autumn' },
    { id: 4, season: 'spring' },
  ])
}
