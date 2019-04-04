import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import middleware from './middleware';
// IMPORT MODULE FILES
import counter from './counter';

export default createStore(
  combineReducers({
    // INCLUDE REDUCER
    counter: counter.reducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
)