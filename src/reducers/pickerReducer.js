import { heroes, heroTemplate } from '../statics/heroes'
import { errors, warnings } from '../statics/TypesAndDefaults'

const SET_HERO = 'picker/SET_HERO'
const SET_PLAYER = 'picker/SET_PLAYER'

const update = (state, mutations) =>
  Object.assign({}, state, mutations)

let warningsToCreate = []
let errorsToCreate = []
function validateData(dataCode){
  errorsToCreate = []
  warningsToCreate = []

  let addError = (error) => {
    errorsToCreate.push(error)
  }

  switch (dataCode) {
    case errors.hero_not_found.code:
      addError(errors.hero_not_found)
      break
    default:
      return;
  }
}

function searchForHero(heroName){
  let errorMsg = null
  let results = heroes.find(hero => hero.name.toLowerCase() === heroName.toLowerCase())
  if(results === undefined){
    errorMsg = errors.hero_not_found.code
  }
  validateData(errorMsg)
  return results;
}

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
  completed: false,
  warnings: [],
  errors: []
}

const reducer = (state = INITIAL_STATE, action, heroes) => {
  switch (action.type) {
    case SET_HERO:
      state = update(state, { hero: searchForHero(action.hero) })
      break
    case SET_PLAYER:
      state = update(state, { player: action.player })
      break
  }
  state = update(state, { errors: errorsToCreate })
  return state
}

export default reducer
