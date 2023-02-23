/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('months').del()
  await knex('months').insert([
    { id: 1, month: 'January', chronomonth: 'Tantamount' },
    { id: 2, month: 'February', chronomonth: 'Morowitz' },
    { id: 3, month: 'March', chronomonth: 'True Bells' },
    { id: 4, month: 'April', chronomonth: 'Vespers' },
    { id: 5, month: 'May', chronomonth: 'Eager' },
    { id: 6, month: 'June', chronomonth: 'Jellicoe' },
    { id: 7, month: 'July', chronomonth: 'Highsmith' },
    { id: 8, month: 'August', chronomonth: 'Petrichor' },
    { id: 9, month: 'September', chronomonth: 'Kentucky' },
    { id: 10, month: 'October', chronomonth: 'Circumspect' },
    { id: 11, month: 'November', chronomonth: 'Torpor' },
    { id: 12, month: 'December', chronomonth: 'Widdershins' },
  ])
}
