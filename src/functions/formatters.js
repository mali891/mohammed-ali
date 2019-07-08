const MONTHS = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
}

export const formatDate = date => {
  let day = date.split('-')[2]
  let month = date.split('-')[1]
  const year = date.split('-')[0]

  // Days which end with 'st'
  const sts = [1, 21, 31]

  // Days which end with 'nd'
  const nds = [2, 22]

  if (parseInt(day) < 10) day = day.split('0')[1]
  if (parseInt(month) < 10) month = month.split('0')[1]

  if (parseInt(day.includes(sts))) {
    day = `${day}st`
  } else if (parseInt(day.includes(nds))) {
    day = `${day}nd`
  } else {
    day = `${day}th`
  }

  return `${day} ${MONTHS[month]} ${year}`
}
