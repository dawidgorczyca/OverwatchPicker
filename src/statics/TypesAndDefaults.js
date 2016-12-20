export const errors = {
  type: 'error',
  hero_not_found: {
    msg: 'Hero not found',
    code: 'hero_not_found'
  },
  hero_empty: {
    msg: 'Please choose hero for this spot',
    code: 'hero_empty'
  },
}
export const warnings = {
  type: 'warning',
  hero_duplicate: {
    msg: 'Hero already in the rooster',
    code: 'hero_duplicate'
  },
}
export const heroUrl = '/assets/heroes/'

export const playerObj = {
  name: '',
  login: '',
  role: {},
  roleRating: '',
  statsUrl: ''
}

export const roles = [
  {
    name: 'pusher',
    description: 'Usually a tank or damage dealer. Focused on the payload or the objective.'
  },
  {
    name: 'roam',
    description: 'Lone raider which main task is pick up enemies alone.'
  },
  {
    name: 'tank',
    description: 'Soaking up damage on front.'
  },
  {
    name: 'disrupt',
    description: 'Focused on disrupting enemy team - attacking from behind mostly, baiting.'
  },
  {
    name: 'core damage',
    description: 'Main damage output, most compositions should have couple of those.'
  },
  {
    name: 'support',
    description: 'Focusing on backing up the team.'
  }
]