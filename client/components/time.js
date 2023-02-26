export function powerType(time) {
  if (time === '00:00' || time === '12:00') {
    return 'Weaver/Walker'
  } else if (time === '03:00' || time === '15:00') {
    return 'Wit/Weaver'
  } else if (time === '06:00' || time === '18:00') {
    return 'Walker/Witness'
  } else if (time === '09:00' || time === '21:00') {
    return 'Weaver/Walker'
  } else if (
    (time > '08:00' && time < '09:00') ||
    (time > '12:00' && time <= '13:00') ||
    (time > '16:00' && time <= '17:00')
  ) {
    return 'Walker (AM)'
  } else if (
    (time > '00:00' && time <= '01:00') ||
    (time > '04:00' && time <= '05:00') ||
    (time > '20:00' && time < '21:00')
  ) {
    return 'Walker (PM)'
  } else if (
    (time > '09:00' && time <= '10:00') ||
    (time > '13:00' && time <= '14:00') ||
    (time > '17.00' && time < '18.00')
  ) {
    return 'Witness (AM)'
  } else if (
    (time > '01:00' && time <= '02:00') ||
    (time > '05:00' && time < '06:00') ||
    (time > '21:00' && time <= '22:00')
  ) {
    return 'Witness (PM)'
  } else if (
    (time > '02:00' && time < '03:00') ||
    (time > '18:00' && time <= '19:00') ||
    (time > '22:00' && time <= '23:00')
  ) {
    return 'Wit (PM)'
  } else if (
    (time > '06:00' && time <= '07:00') ||
    (time > '10:00' && time <= '11:00') ||
    (time > '14:00' && time < '15:00')
  ) {
    return 'Wit (AM)'
  } else if (
    (time > '07:00' && time <= '08:00') ||
    (time > '11:00' && time < '12:00') ||
    (time > '15:00' && time <= '16:00')
  ) {
    return 'Weaver (AM)'
  } else if (
    (time > '03:00' && time <= '04:00') ||
    (time > '19:00' && time <= '20:00') ||
    (time > '23:00' && time < '24:00')
  ) {
    return 'Weaver (PM)'
  } else {
    return ''
  }
}
