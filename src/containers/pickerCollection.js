import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Picker from '../components/PickerComponent'
import bindIndexToActionCreators from '../store/bindIndexToActionCreators'
import { bindIndexToActionCreator, addPickerAction } from '../reducers/teamReducer'
import { setHeroAction, setPlayerAction } from '../reducers/pickerReducer'

const mapStateToProps = state => ({
  pickers: state
})

const pickerDispatchProperties =
  index =>
    dispatch => bindActionCreators(
        bindIndexToActionCreators({setHeroAction, setPlayerAction}, index),
      dispatch)

const mapDispatchToProps = dispatch => ({
  addPicker() {
    dispatch(addPickerAction())
  },
  dispatch
})

const PickerCollection = props =>
  <div className='container'>
    {props.pickers.map((value, index) =>
      <Picker picker={value} key={index}
        {...pickerDispatchProperties(index)(props.dispatch)}/>
    )}
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(PickerCollection)