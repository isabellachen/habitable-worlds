import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import FlipMove from 'react-flip-move';

import rocket from './rocket.png'
import World from './world'

import {
  fetchWorlds,
  calcWorldHabitability,
} from './actions'

import './App.css'

class App extends Component {

  componentDidMount () {
    this.props.fetchWorlds()
  }

  renderWorlds = () => {
    console.log('render worlds called');
    const worlds = this.props.worlds
    if (this.props.loading) return <h1>loading...</h1>
    else {
      return (
        <FlipMove duration={750} easing="ease-out">
        {Object.keys(this.props.worlds).map((name) => {
          return <World key={worlds[name].name} world={worlds[name]}/>
        }).sort((a,b) => {
          //sort the array of react elements
          if (worlds[a.key].habitability > worlds[b.key].habitability) return -1
          if (worlds[a.key].habitability < worlds[b.key].habitability) return 1
          if (typeof worlds[a.key].habitability === 'number' && typeof worlds[b.key].habitability === 'string') return -1
          if (typeof worlds[a.key].habitability === 'string' && typeof worlds[b.key].habitability === 'number') return 1
        })}
        </FlipMove>
      )
    }
  }

  calcHabitabilityForAllWorlds = () => {
    Object.keys(this.props.worlds).forEach((name) => {
      this.props.calcWorldHabitability(name)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="header">
            <h1>Star Scanner</h1>
            <button
              data-tip="run calculations!"
              onClick={this.calcHabitabilityForAllWorlds}
              className="button-glow"></button>
            <ReactTooltip />
          </div>
          <div className="worlds-container">
            {this.renderWorlds()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  worlds: state.worlds,
  loading: state.loading,
})

const mapDispatchToProps = (dispatch) => ({
  fetchWorlds: () => dispatch(fetchWorlds()),
  calcWorldHabitability: (name) => dispatch(calcWorldHabitability(name))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
