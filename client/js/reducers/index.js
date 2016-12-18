import * as actions from '../actions'

const initialState = {
			number: Math.floor((Math.random() * 100) + 1),
			currentGuess: null,
			guesses: [],
			fewestGuesses: 100,
			feedback: 'Make your first guess',
			won: false,
			hideInstructions: true
		}

export const numberReducer = (state = initialState, action) => {
  console.log('numberReducer called')
  switch(action.type) {

    case 'NEW_GAME':
      console.log('NEW GAME - number', state.number)
  		return Object.assign({}, initialValues)

    case 'GET_FEWEST':
      console.log('GET_FEWEST: ', action.fewest)
      return Object.assign({}, state, action.fewest)

    case 'GUESS_NUMBER':
      console.log('reducer GUESS_NUMBER', action.guess)
  		let currentGuess = action.guess
  		let guesses = [...state.guesses, currentGuess]

  		let feedback = ''
  		let distance = Math.abs(currentGuess - state.number)
      console.log('currentGuess', currentGuess)
      console.log('number', state.number)
      console.log("distance", distance)

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

  		console.log('current guess', currentGuess)
  		console.log('guesses', guesses)

  		return state = Object.assign({}, state,
  			{currentGuess,
  			guesses,
  			won,
  			feedback})

    case 'TOGGLE_INSTRUCTIONS':
      console.log('reducer TOGGLE_INSTRUCTIONS')
      return Object.assign({}, state, {
        hideInstructions: action.bool
      })

		case 'GET_FEWEST':
			console.log('reducer GET_FEWEST')
			return Object.assign({}, state, {fewestGuesses: action.fewest})

		case 'GET_FEWEST_ERROR':
			console.log('reducer GET_FEWEST_ERROR', action.error)
			return state;

//TODO: Add SET_FEWEST & SET_FEWEST_ERROR

    default:
      return state
	}
}
