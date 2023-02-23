export function redPosition(day) {
  const finalRed = Math.round((day / 31) * 255)
  return finalRed
}

export function greenPosition(hour) {
  const finalGreen = Math.round((hour / 24) * 255)
  return finalGreen
}

export function bluePosition(minute) {
  const finalBlue = Math.round((minute / 60) * 255)
  return finalBlue
}

export function RGBify(yourRed, yourGreen, yourBlue) {
  if (isNaN(yourRed) || isNaN(yourGreen) || isNaN(yourBlue)) {
    return ''
  } else {
    return (
      yourRed.toString() +
      ',' +
      yourGreen.toString() +
      ',' +
      yourBlue.toString()
    )
  }
}
