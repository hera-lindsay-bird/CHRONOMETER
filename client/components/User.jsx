import React from 'react'

// import { getMonths } from '../apiClient'
//refactor this returning an array at the moment, but doesn't need to ....

function Users(props) {
  // console.log(redPosition)

  const { user } = props

  return (
    <section>
      <ul>
        {user.map((a, i) => (
          <h3 key={i}>{a.type}</h3>
        ))}
      </ul>
    </section>
  )
}

export default Users
