import React from 'react';
import {API_BASE_URL} from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
    type: FETCH_DOG_SUCCESS,
    dog
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
    type: FETCH_DOG_ERROR,
    error
});

export const DELETE_DOG_REQUEST = 'DELETE_DOG_REQUEST';
export const deleteDogRequest = () => ({
  type: DELETE_DOG_REQUEST
});

export const DELETE_DOG_SUCCESS = 'DELETE_DOG_SUCCESS';
export const deleteDogSuccess = (res) => ({  
  type: DELETE_DOG_SUCCESS,
  res
});

export const DELETE_DOG_ERROR = 'DELETE_DOG_ERROR';
export const deleteDogError = (error) => ({
  type: DELETE_DOG_ERROR,
  error
});

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  fetch(`${API_BASE_URL}/dog`).then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
  }).then(dog => {
      dispatch(fetchDogSuccess(dog));
  }).catch(err => {
      dispatch(fetchDogError(err));
  });
};

export const removeDog = () => dispatch => {
  dispatch(deleteDogRequest());
  return fetch(`${API_BASE_URL}/dog`, {
    method: `DELETE`
  })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusTest)
      }
      dispatch(fetchDog());
    }).catch(err => 
        dispatch(deleteDogError(err))
      );
};