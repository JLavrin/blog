export default function colorGenerator (seed: string) {
  return {
    text: `hsla(${hashSeed(seed) % 360}, 85%, 60%, 1)`,
    background: `hsla(${hashSeed(seed) % 360}, 100%, 95%, 1)`,
    border: `hsla(${hashSeed(seed) % 360}, 100%, 90%, 1)`,
  }
}

function hashSeed (seed: string) {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    // eslint-disable-next-line no-bitwise
    hash = seed.charCodeAt(i) + ((hash << 5) - hash)
  }

  return hash
}
