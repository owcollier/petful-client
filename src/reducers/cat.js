// import {
//   FETCH_CAT_REQUEST,
//   FETCH_CAT_SUCCESS,
//   FETCH_CAT_ERROR,
//   DELETE_CAT_REQUEST,
//   DELETE_CAT_ERROR
//   } from '../actions/cat';

const initialState = {
  data: null,
  error: null,
  loading: false
}

export const cat = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CAT_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case 'FETCH_CAT_SUCCESS':
      return Object.assign({}, state, {
        data: action.cat,
        error: null,
        loading: false
      })
    case 'FETCH_CAT_ERROR':
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    case 'DELETE_CAT_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case 'DELETE_CAT_ERROR':
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
    default: return state;
  }
}