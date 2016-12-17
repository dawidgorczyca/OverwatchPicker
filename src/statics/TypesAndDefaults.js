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