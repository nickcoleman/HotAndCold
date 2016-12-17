import React from 'react'
import { connect } from 'react-redux'
import { toggleInstructions } from '../actions'

const Instructions = ({ updateStatus }) => {

	return (
		<div className="instructions-container {toggleHide}">
			<h1>Instructions</h1>
				<p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
				<ol className="instructions-list">
					<li>I pick a random secret number between 1 to 100 and keep it hidden.</li>
					<li>You need to guess until you can find the hidden secret number.</li>
					<li>You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
				</ol>
			<p>So, Are you ready?</p>
			<button className="instruction-button" onClick={() => updateStatus(true)}>OK ... Got It</button>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => (
		{
			 updateStatus: (bool) => {
					return dispatch(toggleInstructions(bool))
			 }
		}
 )


export default connect(null, mapDispatchToProps)(Instructions)
