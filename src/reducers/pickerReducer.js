import { heroes, heroTemplate } from '../statics/heroes'
import { errors, warnings, playerObj } from '../statics/TypesAndDefaults'

const SET_HERO = 'picker/SET_HERO'
const SET_PLAYER = 'picker/SET_PLAYER'

const update = (state, mutations) =>
  Object.assign({}, state, mutations)

let warningsToCreate = []
let errorsToCreate = []
function validateData(dataCode){
  errorsToCreate = []
  warningsToCreate = []

  let addMsg = (type,data) => {
    switch (type) {
      case errors.type:
        errorsToCreate.push(data)
        break
      case warnings.type:
        warningsToCreate.push(data)
        break
      default:
        return;
    }
  }

  switch (dataCode) {
    case errors.hero_not_found.code:
      addMsg(errors.type, errors.hero_not_found)
      break
    case errors.hero_empty.code:
      addMsg(errors.type, errors.hero_empty)
      break
    default:
      return;
  }
}

function searchForHero(heroName){
  let errorMsg = null
  let results = {}

  if(!heroName) {
    errorMsg = errors.hero_empty.code
    validateData(errorMsg)
    return results;
  }
  results = heroes.find(hero => hero.name.toLowerCase() === heroName.toLowerCase())
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
  hero: heroTemplate,
  player: playerObj,
  warnings: [],
  errors: [],
  completed: false
}

const reducer = (state = INITIAL_STATE, action, heroes) => {
  switch (action.type) {
    case SET_HERO:
      state = update(state, { hero: searchForHero(action.hero) })
      break
    case SET_PLAYER:
      state = update(state, { player: action.player })
      break
    default:
      state = update(state)
  }
  state = update(state, { errors: errorsToCreate, warnings: warningsToCreate })
  return state
}

export default reducer
