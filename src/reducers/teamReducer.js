import pickerReducer, { INITIAL_STATE as PICKER_INITIAL_STATE } from './pickerReducer'

const ADD_PICKER = 'counters/ADD_PICKER'

export const addPickerAction = () => ({
  type: ADD_PICKER
})

const INITIAL_STATE = [
  PICKER_INITIAL_STATE,
  PICKER_INITIAL_STATE,
  PICKER_INITIAL_STATE,
  PICKER_INITIAL_STATE,
  PICKER_INITIAL_STATE,
  PICKER_INITIAL_STATE
]

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type.startsWith('picker/')) {
    return [
      ...state.slice(0, action.index),
      pickerReducer(state[action.index], action),
      ...state.slice(action.index + 1)
    ]
  }
  switch (action.type) {
    case ADD_PICKER:
      return [
        ...state,
        PICKER_INITIAL_STATE
      ]
    default:
      return [
        ...state
      ]
  }
}

export default reducer
