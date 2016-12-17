import React from 'react'
import { connect } from 'react-redux'
import { toggleInstructions, newGame } from '../actions'

const NewGame = ({ updateStatus, startNewGame }) => {
    return (
      <div className="game-footer">
        <a onClick={() => startNewGame()} className="newgame-link" >
          New Game
        </a>
        <a onClick={() => updateStatus(false)} className="instructions-link">
          Instructions
		</a>
      </div>
    )
}

const mapDispatchToProps = (dispatch) => (
   {
      updateStatus: (status) => {
         return dispatch(toggleInstructions(status))
      },
      startNewGame: () => dispatch(newGame())
   }
)

export default connect(null, mapDispatchToProps)(NewGame)
