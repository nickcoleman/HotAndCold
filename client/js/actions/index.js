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
