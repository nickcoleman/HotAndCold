import * as actions from '../actions'

let initialValues = {
			number: Math.floor((Math.random() * 100) + 1),
			currentGuess: null,
			guesses: [],
			feedback: 'Make your first guess',
			won: false,
			hideInstructions: true
		}

export const numberReducer = (state=initialValues, action) => {

  switch(action.type) {

    case 'NEW_GAME':
      // console.log('NEW GAME - number', state.number)
  		return Object.assign({}, initialValues)

    case 'GUESS_NUMBER':
  		let currentGuess = action.guess
  		let guesses = [...state.guesses, currentGuess]

  		let feedback = ''
  		let distance = Math.abs(currentGuess - state.number)
      // console.log('currentGuess', currentGuess)
      // console.log('number', state.number)
      // console.log("distance", distance)

      if (distance === 0) {
        feedback = 'Winner!'
      } else if (distance <= 5) {
        feedback = 'Hot'
      } else if (distance <= 10) {
        feedback = 'Warm'
      } else if (distance <= 15) {
        feedback = 'Cold';
      } else {
        feedback = 'Ice Cold'
      }

  		let won = state.won
  		if (currentGuess === state.number) {
  			won = true
  		}

  		// console.log('current guess', currentGuess)
  		// console.log('guesses', guesses)

  		return state = Object.assign({}, state,
  			{currentGuess,
  			guesses,
  			won,
  			feedback})

    case 'TOGGLE_INSTRUCTIONS':
      return Object.assign({}, state, {
        hideInstructions: action.bool
      })

    default:
      return state
	}
}
