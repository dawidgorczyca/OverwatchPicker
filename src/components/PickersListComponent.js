import React, { Component, PropTypes } from 'react';
import PickerComponent from './PickerComponent';

class PickersListComponent extends React.Component {
  render() {
    let spots = [];
    for(let i = 0; i < this.props.teamSize; i++){
      spots.push(
        <PickerComponent
          id={i}
          handleHero={this.props.handleCharacter}
          handlePlayer={this.props.handlePlayer}
        />
      )
    }
    return (
      <div>
        {spots}
      </div>
    )
  }
}

PickersListComponent.propTypes = {
  team: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    hero: PropTypes.object.isRequired
  })),
  teamSize: PropTypes.number.isRequired
}

export default PickersListComponent;