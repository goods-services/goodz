import { all } from 'redux-saga/effects';

// IMPORT MODULE FILES
import counter from './counter';

/**
 * 
 */
export default function* rootSaga() {
  yield all([
    // INCLUDE SAGA
    ...counter.saga,
  ])
}