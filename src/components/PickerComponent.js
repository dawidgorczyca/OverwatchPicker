import React from 'react';
import { heroes } from '../statics/heroes'

class PickerComponent extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      heroName: '',
      portraitState: true
    };
    this.toggleHeroesList = this.toggleHeroesList.bind(this);
  }

  setHero(heroName) {
    this.setState({heroName: heroName});
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
    this.setState({portraitState: !this.state.portraitState});
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
    if(this.props.picker.hero && this.props.picker.hero.role.length > 0) {
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

  render() {
    const props = this.props.picker
    const heroPortrait = this.heroPortrait()
    const heroesList = this.heroesList()
    const heroRole = this.heroRole()
    const playerName = props.player && props.player.name.length > 0 ? props.player.name : ''
    const playerRole = props.player && props.player.role.length > 0 ? props.player.role : ''
    return (
      <div className="picker">
        <div className="picker--portrait interface">
          {heroPortrait}
          <div className="picker--portrait--hero-role interface">
            {heroRole}
          </div>
        </div>
        <div className="picker--player">
          <div className="picker--player-name">

          </div>
          <div className="picker--player-role">

          </div>
        </div>
      </div>
    )
  }
}

PickerComponent.propTypes = {
  picker: React.PropTypes.object.isRequired,
  setHeroAction: React.PropTypes.func.isRequired,
  setPlayerAction: React.PropTypes.func.isRequired,
};

export default PickerComponent
