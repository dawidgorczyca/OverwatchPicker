import React, { PropTypes } from 'react'
import PickerComponent from './PickerComponent'

let spots = []

class PickersListComponent extends React.Component {

  componentWillMount(){
    this.generateSpots()
  }

  generateSpots = () => {
    for(let i = 0; i < this.props.teamSize; i++){
      this.props.addSpot(i)
      spots.push(
        <PickerComponent
          id={i}
          key={i}
          editSpotHero={this.props.editSpotHero}
          handlePlayer={this.props.handlePlayer}
        />
      )
    }
  }

  render() {
    
    return (
      <div>
        {spots}
      </div>
    )
  }
}

PickersListComponent.propTypes = {
  team: PropTypes.array.isRequired,
  teamSize: PropTypes.number.isRequired
}

export default PickersListComponent