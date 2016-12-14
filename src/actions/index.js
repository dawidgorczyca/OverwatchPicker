export const setHero = (id, heroName) => {
  return {
    type: 'SET_HERO',
    id: id,
    heroName: heroName
  }
}

export const setPlayer = (id, heroName) => {
  return {
    type: 'SET_PLAYER',
    id: id,
    heroName: heroName
  }
}

export const addSpot = (id) => {
  return {
    type: 'ADD_SPOT',
    id: id
  }
}

export const editSpotHero = (id, heroName) => {
  return {
    type: 'EDIT_SPOT_HERO',
    id: id,
    heroName: heroName
  }
}
