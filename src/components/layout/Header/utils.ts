const isNewYear = () => {
  const date = new Date()
  return (date.getMonth() === 11 && date.getDate() > 15) || (date.getMonth() === 0 && date.getDate() < 15)
}

export { isNewYear }
