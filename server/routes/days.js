const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  db.getDays()
    .then((days) => {
      res.json(days)
    })
    .catch(console.error)
})

router.get('/:id', (req, res) => {
  const dayId = req.params.id
  db.getDay(dayId)
    .then((day) => {
      res.json(day)
    })
    .catch(console.error)
})

module.exports = router
