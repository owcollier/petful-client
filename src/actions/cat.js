import {API_BASE_URL} from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
    type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
    type: FETCH_CAT_SUCCESS,
    cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
    type: FETCH_CAT_ERROR,
    error
});

export const DELETE_CAT_REQUEST = 'DELETE_CAT_REQUEST';
export const deleteCatRequest = () => ({
  type: DELETE_CAT_REQUEST
});

export const DELETE_CAT_SUCCESS = 'DELETE_CAT_SUCCESS';
export const deleteCatSuccess = (res) => ({  
  type: DELETE_CAT_SUCCESS,
  res
});

export const DELETE_CAT_ERROR = 'DELETE_CAT_ERROR';
export const deleteCatError = (error) => ({
  type: DELETE_CAT_ERROR,
  error
});

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  fetch(`${API_BASE_URL}/cat`).then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
  }).then(cat => {
      dispatch(fetchCatSuccess(cat));
  }).catch(err => {
      dispatch(fetchCatError(err));
  });
};

export const adoptCat = () => dispatch => {
  dispatch(deleteCatRequest());
  return fetch(`${API_BASE_URL}/cat`, {
    method: `DELETE`
  })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusTest)
      }
      dispatch(fetchCat());
    }).catch(err => 
        dispatch(deleteCatError(err))
      );
};