import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

export class Interact extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.makeGuess = this.makeGuess.bind(this)
  }

  makeGuess() {
    const guessInput = Number(this.guessInput.value)
    if (guessInput >= 0 && guessInput <= 100){
      this.props.dispatch(actions.guessNumber(guessInput))
    }
    this.guessInput.value = ''
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.makeGuess()
    }
  }

  render() {
    return (
      <div className="interact">
      <input className="input-guess" type="text" onKeyPress={ this.handleKeyPress } ref={ref => this.guessInput = ref} />
      <button className="guess-button" type="button" onClick={ this.makeGuess } >
        Guess
      </button>
      </div>
    )
  }
}

export default connect()(Interact)
