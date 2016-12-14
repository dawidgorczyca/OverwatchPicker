const team = (state = [], action) => {
  switch (action.type) {
    case 'SET_HERO':
      return {
        id: action.id,
        name: action.name,
        completed: false
      }
    case 'SET_PLAYER':
      return {
        id: action.id,
        name: action.name
      }
    default:
      return state
  }
}

export default team