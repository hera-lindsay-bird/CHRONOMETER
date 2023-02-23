import React, { useState } from 'react'

function AddUserForm(props) {
  const { onAddUser } = props

  const [newType, setNewType] = useState('')
  const [newDate, setNewDate] = useState(null)

  function handleTypeChange(event) {
    setNewType(event.target.value)
  }

  function handleDateChange(event) {
    setNewDate(event.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    const newUser = {
      type: newType,
      date: newDate,
    }
    onAddUser(newUser)

    setNewType('')
    setNewDate('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">My name is: </label>
          <input
            type="text"
            name="user"
            id="user"
            onChange={handleTypeChange}
            value={newType}
          />
        </div>

        <div>
          <label htmlFor="date">I was born: </label>
          <input
            type="datetime-local"
            name="date"
            id="date"
            onChange={handleDateChange}
            value={newDate}
          />
        </div>

        <button type="submit" className="button">
          CONSULT THE CHRONOMETER
        </button>
      </form>
    </div>
  )
}

export default AddUserForm
