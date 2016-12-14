import React, { Component, PropTypes } from 'react';

class PickerComponent extends React.Component {
  render() {
    return (
      <div>
        <h2><small>Character name:</small></h2>
        <p><small>Character role:</small> </p>
        <input type="text" placeholder="Enter character name"/>
        <button type="button" onClick={this.props.handleHero}>Select</button>
        <br/><br/>
        <input type="text" placeholder="Player name"/>
        <button type="button" onClick={this.props.handlePlayer}>Set</button>
      </div>
    )
  }
}

PickerComponent.propTypes = {
  handleHero: PropTypes.func.isRequired,
  handlePlayer: PropTypes.func.isRequired
}

export default PickerComponent;
