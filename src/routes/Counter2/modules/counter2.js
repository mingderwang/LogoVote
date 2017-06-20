
export function itemsHasErrored (bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  }
}
export function itemsIsLoading (bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  }
}
export function itemsFetchDataSuccess (items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  }
}

export function errorAfterFiveSeconds () {
    // We return a function instead of an action object
  return (dispatch) => {
    setTimeout(() => {
            // This function is able to dispatch other action creators
      dispatch(itemsHasErrored(true))
    }, 5000)
  }
}

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER2_INCREMENT = 'COUNTER2_INCREMENT'
export const COUNTER2_DOUBLE_ASYNC = 'COUNTER2_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER2_INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER2_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER2_INCREMENT]    : (state, action) => state + action.payload,
  [COUNTER2_DOUBLE_ASYNC] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer2 (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
