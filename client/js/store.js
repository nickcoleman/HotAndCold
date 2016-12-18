import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'

import * as reducers from './reducers'

export default createStore(reducers.numberReducer, applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
