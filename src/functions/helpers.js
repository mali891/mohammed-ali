export const splitArray = (array, arraySize) => {
  let newArrays = []

  while (array.length) {
    newArrays.push(array.splice(0, arraySize))
  }

  return newArrays
}
