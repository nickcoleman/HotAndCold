import React from 'react';
import { connect } from 'react-redux';
import Interact from './interact';
import NewGame from './newGame';
import Instructions from './instructions'

import * as actions from '../actions';

export class Game extends React.Component {
constructor(props) {
   super(props)
   console.log('Game props: ', props)
}

componentDidlMount() {
   console.log('componentDidMount')
  //  this.props.newGame();
   this.props.dispatch(actions.fetchFewest())
}

render() {
   const guesses = this.props.guesses.map(function(guess, i) {
      return <span key={i}>{guess} </span>;
   })

   return (
      <div className="page">
         <div className="game">
           <div className="interaction">
             <div className="feedback">
               <p className="feedback-text">{this.props.feedback}</p>
             </div>
             <Interact />
           </div>
           <p className="previous-guesses">{guesses}</p>
           <p className="total-guesses">Guesses: {guesses.length}</p>
           <p className="fewest-guesses">Fewest Guesses: {this.props.fewestGuesses}</p>
          <NewGame />
         </div>
         { this.props.hideInstructions ? '' : <Instructions /> }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  feedback: state.feedback,
  guesses: state.guesses,
  fewestGuesses: state.fewestGuesses,
  hideInstructions: state.hideInstructions
})

export default connect(mapStateToProps, null)(Game);
