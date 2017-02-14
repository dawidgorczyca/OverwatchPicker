import React from 'react'
import Picker from '../components/PickerComponent'

const Pickers = [1,2,3,4,5];

export const PickerCollection = props =>
  <div className='container'>
    {Pickers.map((value, index) =>
      <Picker picker={value} key={index}/>
    )}
  </div>