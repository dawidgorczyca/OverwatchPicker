import React, { PropTypes } from 'react';

class PickerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heroName: '',
      playerName: ''
    }
    this.handleHeroName = this.handleHeroName.bind(this)
  }

  handleHeroName(event) {
    this.setState({heroName: event.target.value})
    console.log(this.state.heroName)
  }

  render() {
    return (
      <div>
        <h2><small>Character name:</small></h2>
        <p><small>Character role:</small> </p>
        <input type="text" value={this.state.heroName} onChange={this.handleHeroName} />
        <button type="button"
        onClick={() => this.props.editSpotHero(this.props.id, this.state.heroName)}
        >Select</button>
        <br/><br/>
        <input type="text" placeholder="Player name"/>
        <button type="button" onClick={this.props.handlePlayer}>Set</button>
      </div>
    )
  }
}

PickerComponent.propTypes = {
  editSpotHero: PropTypes.func.isRequired,
  handlePlayer: PropTypes.func.isRequired
}

export default PickerComponent
