import 'isomorphic-fetch'
// import axios from 'axios'
console.log('actions called')

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME,
	number: Math.floor((Math.random() * 100) + 1)
})

export const GUESS_NUMBER = 'GUESS_NUMBER'
export const guessNumber = guess => ({
	type: GUESS_NUMBER,
	guess
})


export const TOGGLE_INSTRUCTIONS = 'TOGGLE_INSTRUCTIONS'
export const toggleInstructions = bool => ({
	type: TOGGLE_INSTRUCTIONS,
	bool
})

// ========== Get Fewest Guesses ============

export const GET_FEWEST = 'GET_FEWEST'
export const getFewest = fewest => ({
	type: GET_FEWEST,
	fewest
})

export const GET_FEWEST_ERROR = 'GET_FEWEST_ERROR'
export const getFewestError = error => ({
	type: GET_FEWEST_ERROR,
	error
})

export const fetchFewest = () => {
	console.log('fetchFewest called')
	return dispatch => {
		const url = 'https://localhost:8080/fewest'
		return fetch(url)
	    .then(response => {
	      if (!response.ok) {
	        throw new Error(response.statusText)
	      }
	      return res.json();
	    })
			.then(data => {
				console.log(data)
	      dispatch(getFewest(data))
	    })
			.catch(error => {
				console.log(error)
	      dispatch(getFewestError(error))
	    })
	}
}

// ========= Set Fewest Guesses ===========

export const SET_FEWEST = 'SET_FEWEST'
export const 	setFewest = fewest => ({
	type: SET_FEWEST,
	fewest
})

export const SET_FEWEST_ERROR = 'SET_FEWEST_ERROR'
export const 	setFewestError = fewest => ({
	type: SET_FEWEST_ERROR,
	fewest
})

export const postFewest = () => {
	console.log('postFewest called')
	const url = 'https://localhost:8080/fewest'
	return fetch(url, {
		method: 'post',
    headers: {
      "Content-type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({"fewest": fewestGuesses})
	})
	.then (response => {
		if (!response.ok) {
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		return response;
	})
	.then (response = response.json())
	.then (data => {
		console.log("postFewest data: ", data)
		dispatch(setFewest(data))
	})
	.catch (error => dispatch(setFewestError(error)))
}
