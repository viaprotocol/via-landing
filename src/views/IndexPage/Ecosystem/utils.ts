// get random number between 2 numbers
export const getRandomNumber = (min: number, max: number, withFloor = true) => {
  const random = Math.random() * (max - min + 1)
  return withFloor ? Math.floor(random) + min : random + min
}
