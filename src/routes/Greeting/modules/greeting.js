// ------------------------------------
// Constants
// ------------------------------------
export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED'
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING'
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function itemsHasErrored (bool) {
  return {
    type: ITEMS_HAS_ERRORED,
    hasErrored: bool
  }
}
export function itemsIsLoading (bool) {
  return {
    type: ITEMS_IS_LOADING,
    isLoading: bool
  }
}
export function itemsFetchDataSuccess (items) {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
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

export function itemsFetchData (url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true))
    fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw Error(response.statusText)
              }
              dispatch(itemsIsLoading(false))
              return response
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)))
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
  itemsHasErrored,
  itemsIsLoading
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ITEMS_HAS_ERRORED] : (state, action) => action.hasErrored,
  [ITEMS_IS_LOADING] : (state, action) => action.isLoading,
  [ITEMS_FETCH_DATA_SUCCESS] : (state, action) => action.items
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer2 (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
