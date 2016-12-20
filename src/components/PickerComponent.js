import React from 'react';
import { heroUrl } from '../statics/TypesAndDefaults'
import { heroes } from '../statics/heroes'

class PickerComponent extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      heroName: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getPortrait() {
    const props = this.props.picker
    const baseUrl = process.env.PUBLIC_URL
    function heroName() {
      return props.hero.name.toLowerCase().replace(/\s/g, '')
    }
    if(props.hero && props.hero.name){
      return baseUrl + heroUrl + 'portrait_' + heroName() + '.png'
    } else {
      return baseUrl + heroUrl + 'portrait_dummy.png'
    }
  }

  handleChange(event) {
    this.setState({heroName: event.target.value});
  }

  render() {
    const props = this.props.picker
    const portraitUrl = this.getPortrait()
    const heroName = props.hero && props.hero.name.length > 0 ? props.hero.name : ''
    const heroRole = props.hero && props.hero.role.length > 0 ? props.hero.role : ''
    const playerName = props.player && props.player.name.length > 0 ? props.player.name : ''
    const playerRole = props.player && props.player.role.length > 0 ? props.player.role : ''
    return (
      <div className="picker">
        <div className="picker-hero">
          <div className="picker-hero--name">
            {heroName}
          </div>
          <div className="picker-hero--role">
            {heroRole}
          </div>
          <div className="picker-hero--portrait">
            <img src={portraitUrl} role="presentation"/>
          </div>
        </div>

        <div className="picker-player">
          <div className="picker-player--name">
            {playerName}
          </div>
          <div className="picker-player--role">
            {playerRole}
          </div>
        </div>

        <ul className="picker-list">
          {heroes.map((hero, index) =>
            <li key={index}>{hero.name}</li>
          )}
        </ul>
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
