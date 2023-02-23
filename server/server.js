const path = require('path')
const express = require('express')
const cors = require('cors')
const holidays = require('./routes/holidays')
const history = require('./routes/history')
const days = require('./routes/days')
const months = require('./routes/months')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))
server.use('/api/v1/holiday', holidays)
server.use('/api/v1/history', history)
server.use('/api/v1/days', days)
server.use('/api/v1/months', months)

// server.get('/greeting', (req, res) => {
//   const greetings = ['hola', 'hi', 'hello', 'howdy']
//   let index = Math.floor(Math.random() * greetings.length)
//   console.log('index =', index)
//   res.json({ greeting: greetings[index] })
// })

server.get('/user', (req, res) => {
  const hexcolors = [
    'E4FF20',
    '4070FF',
    'FF80F0',
    'FF609C',
    'FF8840',
    'D8C0FF',
    '808000',
    'FF5820',
  ]
  let index = Math.floor(Math.random() * hexcolors.length)
  // console.log('index again, apparently', index)
  res.json({ hexcolor: hexcolors[index] })
})

module.exports = server
