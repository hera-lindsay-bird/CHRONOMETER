import React, { useEffect, useState } from 'react'
import request from 'superagent'

function History(props) {
  const month = props.month
  const day = props.day

  const [historyData, setHistoryData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    request
      .get(
        `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`
      )
      .then((response) => {
        setHistoryData(response.body)
        setIsError(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
      .catch(() => {
        setIsError(true)
      })
  }, [])

  if (isLoading) return <h1>Loading</h1>
  if (isError) return <h1>{'Oops no history!'}</h1>
  return (
    <>
      {' '}
      <h2>ON THIS DAY IN HISTORY:</h2>
      {historyData.selected.map((selected, i) => {
        return (
          <div key={i}>
            <h2>{selected.text}</h2>
          </div>
        )
      })}
      <h2>PEOPLE BORN ON THIS DAY:</h2>
      {historyData.births.map((births, i) => {
        return (
          <div key={i}>
            <h2>{births.text}</h2>
          </div>
        )
      })}
    </>
  )
}

export default History
