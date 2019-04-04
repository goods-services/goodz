import actions from './counter.actions';

const ACTION_HANDLERS = {
  [actions.COUNTER_DECREMENT]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [actions.COUNTER_DECREMENT]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [actions.COUNTER_CHANGED]: (state, action) => {
    return { ...state, ...action.payload }
  },
}

let defaultState = {
  currentCount: 0,
}

/**
 * Reducer function
 * @param {object} state Current State
 * @param {object} action Action
 * @return {*} Out
 */
export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default reducer;
