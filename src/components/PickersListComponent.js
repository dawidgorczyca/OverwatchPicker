import React, { Component, PropTypes } from 'react';
import PickerComponent from './PickerComponent';

class PickersListComponent extends React.Component {
  render() {
    return (
      <div>
          <PickerComponent
            handleHero={this.props.handleCharacter}
            handlePlayer={this.props.handlePlayer}
          />  
      </div>
    )
  }
}

PickersListComponent.propTypes = {
  team: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    hero: PropTypes.object.isRequired
  }))
}

export default PickersListComponent;