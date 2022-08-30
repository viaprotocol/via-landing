/**
 * It takes an object with two properties, name and network, and returns a string that is the name and
 * network concatenated together
 * @param  -  - The name of the token
 */
const getTokenDescription = ({ name, network }: { name: string; network?: string }) => {
  if (!network) {
    return name
  }

  return `${name} (${network})`
}

export { getTokenDescription }
