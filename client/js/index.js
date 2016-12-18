require ('babel-polyfill')
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Game from './components/game'
import * as actions from './actions'
console.log(`Client Side running in ${process.env.NODE_ENV} mode`)

// store.dispatch(actions.newGame())
// store.dispatch(actions.guessNumber(20))
// store.dispatch(actions.checkCloseness())
// store.dispatch(actions.checkCorrect())
// console.log(store.getState())

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store} >
            <Game />
        </Provider>,
        document.getElementById('app')
    )
)
