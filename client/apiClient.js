import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'
const dayUrl = 'http://localhost:3000/api/v1/days/'
const monthsUrl = 'http://localhost:3000/api/v1/months/'

export function getHolidays() {
  return request.get(`${serverURL}/holiday`).then((response) => response.body)
}

export function getMonths() {
  return request.get(monthsUrl).then((response) => response.body)
}

export function getDays() {
  return request.get(dayUrl).then((response) => response.body)
}
