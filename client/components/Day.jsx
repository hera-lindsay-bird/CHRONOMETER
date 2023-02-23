import React from 'react'

function Day(props) {
  const symbol = props.symbol

  return <div>{<img className="images" src={`/images/${symbol}.png`} />}</div>
}

export default Day
