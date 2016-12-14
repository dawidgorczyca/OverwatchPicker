import update from 'immutability-helper'

const heroes = [
  {
    heroName: 'Reinhardt',
    role: 'tank',
    portraitUrl: ''
  },
  {
    heroName: 'Genji',
    role: 'damage dealer',
    portraitUrl: ''
  }
]

let lookup = {}
let findHero = (heroName) => {
  for (var i = 0, len = heroes.length; i < len; i++) {
    lookup[heroes[i].heroName] = heroes[i]
  }
  return lookup[heroName];
}

const spot = (state = {}, action) => {
  switch (action.type) {
    case 'SET_HERO':
      return {
        ...state,
        id: action.id,
        heroName: action.heroName
      }
    case 'SET_PLAYER':
      return {
        ...state,
        id: action.id,
        playerName: action.playerName
      }
    default:
      return state
  }
}

const team = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SPOT':
      return [
          ...state,
          spot({
            id: action.id,
            heroName: '',
            completed: false
          }, action)
      ]
    case 'EDIT_SPOT_HERO':
      return [
        ...state,
        spot({
            id: action.id,
            heroName: action.heroName,
            completed: false
          }, action)
      ]
    default:
      return state
  }
}

export default team