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

  // Dates which end with 'st'
  const sts = [1, 21, 31]

  // Dates which end with 'nd'
  const nds = [2, 22]

  // Dates which end with 'rd'
  const rds = [3, 23]

  if (parseInt(day) < 10) day = day.split('0')[1]
  if (parseInt(month) < 10) month = month.split('0')[1]

  if (sts.includes(parseInt(day))) return `${day}st ${MONTHS[month]} ${year}`
  if (nds.includes(parseInt(day))) return `${day}nd ${MONTHS[month]} ${year}`
  if (rds.includes(parseInt(day))) return `${day}rd ${MONTHS[month]} ${year}`

  return `${day}th ${MONTHS[month]} ${year}`
}
