const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  db.getMonths()
    .then((months) => {
      res.json(months)
    })
    .catch(console.error)
})

router.get('/:id', (req, res) => {
  const monthId = req.params.id
  db.getMonth(monthId)
    .then((month) => {
      res.json(month)
    })
    .catch(console.error)
})

module.exports = router
