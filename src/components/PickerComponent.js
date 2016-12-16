import React, { PropTypes } from 'react';

class PickerComponent extends React.Component {
   constructor(props) {
    super(props);
    this.state = {heroName: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({heroName: event.target.value});
  }

  render() {
    return (
      <div>
        <h2><small>Character name:</small></h2>
        <input type="text" value={this.state.heroName} onChange={this.handleChange}/>
        <button onClick={() => this.props.setHeroAction(this.state.heroName)}>Set Hero</button>
        <p><small>Character role:</small></p>
      </div>
    )
  }
}

export default PickerComponent
