import React from 'react';
import { heroes } from '../statics/heroes'
import { playerObj } from '../statics/TypesAndDefaults'

class PickerComponent extends React.Component {
   constructor(props) {
    super(props)
    this.state = {
      heroName: '',
      portraitState: true,
      playerName: '',
      playerNameState: true,
    }
    this.toggleHeroesList = this.toggleHeroesList.bind(this)
    this.togglePlayerNameSubmit = this.togglePlayerNameSubmit.bind(this)
    this.handlePlayerNameSubmit = this.handlePlayerNameSubmit.bind(this)
    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this)
  }

  setHero(heroName) {
    this.setState({heroName: heroName})
    this.props.setHeroAction(heroName)
    this.toggleHeroesList()
  }

  prepareName(heroName) {
    return heroName.toLowerCase().replace(/[\. ,:-]+/g, '')
  }

  getPortrait() {
    const props = this.props.picker
    if(props.hero && props.hero.name){
      return 'hero-portrait-' + this.prepareName(props.hero.name)
    } else {
      return 'hero-portrait-empty'
    }
  }

  toggleHeroesList(){
    this.setState({portraitState: !this.state.portraitState})
  }

  heroPortrait() {
    if (this.state.portraitState){
      return (
        <div className={'picker--portrait--hero ' + this.getPortrait()} onClick={this.toggleHeroesList}></div>
      )
    } else {
      return this.heroesList()
    }
  }

  heroRole() {
    if(this.props.picker.hero && this.props.picker.hero.role) {
      return (
        <div className={'interface hero-role hero-role-' + this.prepareName(this.props.picker.hero.role)}></div>
      )
    } else {
      return
    }
  }

  heroesList() {
    return (
      <ul className="picker--portrait--heroes-list">
        {heroes.map((hero, index) =>
          <li key={index} className="heroes-list--item" onClick={() => {this.setHero(hero.name)}}>
            <span className={'interface hero-portrait-small hero-portrait-small-' + this.prepareName(hero.name)}></span>
            <span className="heroes-list--item--hero-name">{hero.name}</span>
          </li>
        )}
      </ul>
    )
  }

  playerName() {
    if(this.state.playerNameState){
      if(this.props.picker.player && this.props.picker.player.name.length > 0){
        return (
          <div className="picker--player-name" onClick={this.togglePlayerNameSubmit}>
            {this.state.playerName}
          </div>
        )
      } else {
        return (
          <div className="picker--player-name" onClick={this.togglePlayerNameSubmit}>
            Enter player
          </div>
        )
      }
    } else {
       return this.playerNameInput()
    }
  }

  playerNameInput() {
    return (
      <div className="picker--player-name">
        <form onSubmit={this.handlePlayerNameSubmit}>
          <input type="text" value={this.state.playerName} onChange={this.handlePlayerNameChange} />
        </form>
      </div>
    )
  }

  handlePlayerNameChange(event) {
    this.setState({playerName: event.target.value})
  }

  handlePlayerNameSubmit(event) {
    event.preventDefault();
    this.props.setPlayerNameAction(this.state.playerName)
    this.togglePlayerNameSubmit()
  }

  togglePlayerNameSubmit() {
    this.setState({playerNameState: !this.state.playerNameState})
  }

  render() {
    const props = this.props.picker
    const heroPortrait = this.heroPortrait()
    const heroesList = this.heroesList()
    const heroRole = this.heroRole()
    const playerName = this.playerName()
    return (
      <div className="picker">
        <div className="picker--portrait interface">
          {heroPortrait}
          <div className="picker--portrait--hero-role interface">
            {heroRole}
          </div>
        </div>
        <div className="picker--player">
          {playerName}
        </div>
      </div>
    )
  }
}

PickerComponent.propTypes = {
  picker: React.PropTypes.object.isRequired,
  setHeroAction: React.PropTypes.func.isRequired,
  setPlayerNameAction: React.PropTypes.func.isRequired,
};

export default PickerComponent
