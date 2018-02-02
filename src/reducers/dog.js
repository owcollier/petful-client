import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR,
  DELETE_DOG_REQUEST,
  DELETE_DOG_ERROR
  } from '../actions/dog';

const initialState = {
  data: null,
  error: null,
  loading: false
}

export const dog = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DOG_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case 'FETCH_DOG_SUCCESS':
      return Object.assign({}, state, {
        data: action.dog,
        error: null,
        loading: false
      })
    case 'FETCH_DOG_ERROR':
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    case 'DELETE_DOG_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case 'DELETE_DOG_ERROR':
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
    default: return state;
  }
}