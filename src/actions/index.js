export const setHero = (id, name) => {
  return {
    type: 'SET_HERO',
    id: id,
    name: name
  }
}

export const setPlayer = (id, name) => {
  return {
    type: 'SET_PLAYER',
    id: id,
    name: name
  }
}