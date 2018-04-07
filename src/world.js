import React, { Component } from 'react'

import './App.css'

class World extends Component {

  showHabitability = () => {
    const habitability = this.props.world.habitability
    return habitability ? <li>habitability: {habitability}</li> : <li>habitability: not yet run</li>
  }

  renderWorld = (world) => {
    return (
      <div className="world-wrapper">
        <img src={world.poster}></img>
        <div className="world-info">
          <h3>{world.name}</h3>
          <ul>
            <li>star: {world.star}</li>
            <li>atmosphere: {world.atmosphere}</li>
            <li>temperature: {world.temperature}</li>
            <li>distance from Earth: {world.distance}</li>
            <li>surface: {world.surface}</li>
            <li>tidal locking: {String(world['tidal-locking'])}</li>
            {this.showHabitability()}
          </ul>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.renderWorld(this.props.world)}
      </div>
    )
  }
}

export default World
