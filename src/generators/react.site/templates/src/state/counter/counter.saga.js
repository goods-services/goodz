import { put, takeLatest, select } from 'redux-saga/effects';

import actions from './counter.actions';

/**
 * Hello
 * @param {object} state Stae
 * @returns {object} Current State
 */
export const getCount = state => state.counter;

/**
 *
 * @param {object} params Params
 */
function* counterIncrement() {
  let count = yield select(getCount);
  let { currentCount } = count;
  yield put({
    type: actions.COUNTER_CHANGED,
    payload: {
      currentCount: currentCount + 1,
    },
  });
  return;
}

/**
 *
 */
function* counterDecrement() {
  let count = yield select(getCount);
  let { currentCount } = count;
  yield put({
    type: actions.COUNTER_CHANGED,
    payload: {
      currentCount: currentCount - 1,
    },
  });
  return;
}

/**
 *
 */
export default [
  takeLatest(actions.COUNTER_INCREMENT, counterIncrement),
  takeLatest(actions.COUNTER_DECREMENT, counterDecrement),
]
