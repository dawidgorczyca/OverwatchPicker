import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import overwatchPicker from './reducers/teamReducer'
import PickerCollection from './containers/pickerCollection'

import './App.css';

const store = (window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore) : createStore)(overwatchPicker)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PickerCollection/>
      </Provider>
    )
  }
}