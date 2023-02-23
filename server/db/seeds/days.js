/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('days').del()
  await knex('days').insert([
    { id: 1, symbol: 'dagger' },
    { id: 2, symbol: 'spade' },
    { id: 3, symbol: 'star' },
    { id: 4, symbol: 'horn' },
    { id: 5, symbol: 'quill' },
    { id: 6, symbol: 'hammer' },
    { id: 7, symbol: 'wheel' },
    { id: 8, symbol: 'spoon' },
    { id: 9, symbol: 'coin' },
    { id: 10, symbol: 'bucket' },
    { id: 11, symbol: 'compass' },
    { id: 12, symbol: 'dice' },
    { id: 13, symbol: 'arrow' },
    { id: 14, symbol: 'abacus' },
    { id: 15, symbol: 'globe' },
    { id: 16, symbol: 'ship' },
    { id: 17, symbol: 'candle' },
    { id: 18, symbol: 'knot' },
    { id: 19, symbol: 'book' },
    { id: 20, symbol: 'bell' },
    { id: 21, symbol: 'anchor' },
    { id: 22, symbol: 'wateringcan' },
    { id: 23, symbol: 'hourglass' },
    { id: 24, symbol: 'telescope' },
    { id: 25, symbol: 'grave' },
    { id: 26, symbol: 'ladder' },
    { id: 27, symbol: 'broom' },
    { id: 28, symbol: 'scales' },
    { id: 29, symbol: 'needle' },
    { id: 30, symbol: 'horseshoe' },
    { id: 31, symbol: 'mirror' },
  ])
}
