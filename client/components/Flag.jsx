import request from 'superagent'
import React, { useEffect, useState } from 'react'

function Flag(props) {
  const { rgbcolor } = props
  const [colorData, setColorData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    request
      .get(`https://www.thecolorapi.com/id?rgb=${rgbcolor}&format=json`)
      .then((response) => {
        setColorData(response.body)
        setIsError(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
      .catch(() => {
        setIsError(true)
      })
  }, [props.rgbcolor])

  if (isLoading) return <h1>THE CHRONOMETER IS THINKING</h1>
  if (isError) return <h1>{'UHOH!'}</h1>

  return (
    <div>
      <div>
        <h3>Colour: {colorData.name.value}</h3>
      </div>
    </div>
  )
}

export default Flag
