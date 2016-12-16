const SET_HERO = 'picker/SET_HERO'
const SET_PLAYER = 'picker/SET_PLAYER'

const update = (state, mutations) =>
  Object.assign({}, state, mutations)

export const setHeroAction = (hero) => ({
  type: SET_HERO,
  hero
})

export const setPlayerAction = () => ({
  type: SET_PLAYER
})

export const INITIAL_STATE = {
  hero: {},
  player: {},
  completed: false
}

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case SET_HERO:
      state = update(state, { hero: action.hero })
      break
    case SET_PLAYER:
      state = update(state, { player: action.player })
      break
  }
  state = update(state)
  return state
}

export default reducer
