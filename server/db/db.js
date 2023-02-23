const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getDays,
  getDay,
}

function getDays(db = connection) {
  return db('days').select()
}

function getDay(db = connection) {
  return db('day').select()
}
