import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import request from 'superagent'
import { getDays } from '../apiClient'
import { redPosition, bluePosition, greenPosition, RGBify } from './color'
import { animalType } from './Animals'
import { powerType } from './time'
import AddUserForm from './AddUserForm'
import Flag from './Flag'
import History from './History'
import { weekday } from './weekday'
import Day from './Day'
import Scheme from './Scheme'
const userId = uuid()
console.log('userId', userId)

function App() {
  const [user, setUser] = useState([])
  const [userData, setUserData] = useState({})
  const [days, setDays] = useState([])

  //time//
  const birthMinute = new Date(user[0]?.date)
    .getMinutes()
    .toString()
    .padStart(2, '0')
  const birthHour = new Date(user[0]?.date)
    .getHours()
    .toString()
    .padStart(2, '0')
  const birthDay = new Date(user[0]?.date).getDate().toString().padStart(2, '0')
  //RGB VALUES
  const redPos = redPosition(birthDay)
  const greenPos = greenPosition(birthHour)
  const bluePos = bluePosition(birthMinute)
  const rgbValue = RGBify(redPos, greenPos, bluePos)
  //ANIMAL AND DATE
  const hourMinute = birthHour + ':' + birthMinute
  const numericalBirthDay = new Date(user[0]?.date).getDate()
  const numericalBirthMonth = new Date(user[0]?.date).getMonth() + 1
  const finalPower = powerType(hourMinute)
  const stringBirthMonth = numericalBirthMonth.toString().padStart(2, '0')
  const userDate = new Date(user[0]?.date)
  const weekDay = userDate.getDay()

  const element = weekday(weekDay)

  console.log('rgbvalue', rgbValue)
  console.log('redPos', redPos, 'greenPos', greenPos, 'bluePos', bluePos)
  const animal = animalType(stringBirthMonth, finalPower)
  console.log('animal =', animal)

  function handleAddUser(newUser) {
    newUser.id = uuid()
    setUser([...user, newUser])
  }
  useEffect(() => {
    return getDays().then((days) => {
      setDays(days)
      return null
    })
  }, [])

  useEffect(() => {
    request
      .get(`http://localhost:3000/user`)
      .then((response) => {
        console.log('response=', response)
        setUserData(response.body)
      })
      .catch(() => {
        console.log('there was an error')
      })
  }, [])

  return (
    <div className="page catBorder">
      <div className="">
        <main>
          <div className="">
            <h2>ENTER YOUR DAY AND TIME OF BIRTH ⏳</h2>
            <AddUserForm onAddUser={handleAddUser} />
          </div>

          {rgbValue && <Flag rgbcolor={rgbValue} />}

          <h3>Power: {finalPower}</h3>
          <h3>Animal Sign: {animal}</h3>
          <h3>Element: {element}</h3>

          <div className="container">
            <div className="coins">
              <div
                className="resultsdiv"
                style={{
                  backgroundColor: `rgb(${rgbValue})`,
                }}
              >
                <div>
                  {days.map((day) => {
                    if (day.id === numericalBirthDay) {
                      return (
                        <Day key={day.id} id={day.id} symbol={day.symbol} />
                      )
                    }
                  })}
                </div>
              </div>
              <div
                className="resultsdiv"
                style={{
                  backgroundColor: `rgb(${rgbValue})`,
                }}
              >
                <div>
                  {<img className="images" src={`/images/${animal}.png`} />}{' '}
                </div>
              </div>
            </div>
          </div>

          <div className="onthisdaydiv">
            {numericalBirthMonth && (
              <History month={numericalBirthMonth} day={numericalBirthDay} />
            )}
          </div>
          <div className="scheme">
            <h3>COLOUR SCHEME</h3>
            {rgbValue && <Scheme rgbcolor={rgbValue} />}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
