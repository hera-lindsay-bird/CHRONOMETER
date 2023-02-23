import request from 'superagent'
import React, { useEffect, useState } from 'react'

function Scheme(props) {
  const { rgbcolor } = props
  const [schemeData, setSchemeData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    request

      .get(
        `https://www.thecolorapi.com/scheme?rgb=${rgbcolor}&mode=analogic-complement&count=5&format=json`
      )

      .then((response) => {
        setSchemeData(response.body)
        setIsError(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
      .catch(() => {
        setIsError(true)
      })
  }, [props.rgbcolor])

  if (isLoading) return <h1>Loading</h1>
  if (isError) return <h1>{'Oops no color scheme!'}</h1>

  return (
    <>
      {schemeData.colors.map((colors, i) => {
        return (
          <div key={i}>
            <p>
              {colors.hex.value}, {colors.name.value}
            </p>
            <img src={colors.image.named}></img>
          </div>
        )
      })}
    </>
  )
}

export default Scheme
