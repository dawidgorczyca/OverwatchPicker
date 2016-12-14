const heroes = [
  {
    name: 'Reinhardt',
    role: 'tank',
    portraitUrl: ''
  },
  {
    name: 'Genji',
    role: 'damage dealer',
    portraitUrl: ''
  }
]

let findHero = (name) => {
  heroes.find((hero) => {
    return hero.name === name
  })
}

const team = (state = [], action) => {
  switch (action.type) {
    case 'SET_HERO':
      return {
        id: action.id,
        name: findHero(action.name),
        completed: false
      }
    case 'SET_PLAYER':
      return {
        id: action.id,
        playerName: action.playerName
      }
    default:
      return state
  }
}

export default team