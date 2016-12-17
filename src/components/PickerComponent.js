import React, { PropTypes } from 'react';
import { heroUrl } from '../statics/TypesAndDefaults'

class PickerComponent extends React.Component {
   constructor(props) {
    super(props);
    this.state = {heroName: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  getPortrait() {
    const props = this.props.picker
    if(props.hero && props.hero.name){
      return process.env.PUBLIC_URL + heroUrl + 'portrait_' + props.hero.name.toLowerCase() + '.png'
    } else {
      return process.env.PUBLIC_URL + heroUrl + 'portrait_dummy.png'
    }
  }

  handleChange(event) {
    this.setState({heroName: event.target.value});
  }

  render() {
    const props = this.props.picker
    const portraitUrl = this.getPortrait()
    return (
      <div>
        <h2><small>Character name:</small> {props.hero.name}</h2>
        <input type="text" value={this.state.heroName} onChange={this.handleChange}/>
        <button onClick={() => this.props.setHeroAction(this.state.heroName)}>Set Hero</button>
        <p><small>Character role:</small> {props.hero.role}</p>
        <img src={portraitUrl}/>
      </div>
    )
  }
}

export default PickerComponent
