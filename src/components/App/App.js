import React, { Component } from 'react';
import Sightings from '../Sightings/Sightings';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      sightings: []
    }
  }

  render() {
    return(
      <div className='app-container'>
        <Sightings />
      </div>
    )
  }
}

export default App;
