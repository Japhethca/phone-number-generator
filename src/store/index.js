import { createContext } from 'react';
import { getNumbers, generateNumbers } from '../api/numbers';

export const StoreContext = createContext(null);

export const GET_NUMBERS = 'numbers/GET_NUMBERS';
export const GENERATE_NUMBERS = 'numbers/GENERATE_NUMBERS';
export const IS_FETCHING_NUMBERS = 'numbers/IS_FETCHING_NUMBERS';

export const isFetchingAction = () => ({
  type: IS_FETCHING_NUMBERS,
});

export function generateNumbersAction(noOfNumbers) {
  return (dispatch) => {
    dispatch(isFetchingAction(true));
    return generateNumbers(noOfNumbers).then((numbers) => 
      dispatch({
        payload: numbers,
        type: GENERATE_NUMBERS,
      })
    );
  };
}

export function getNumbersAction(sortOrder) {
  return (dispatch) => {
    dispatch(isFetchingAction(true));
    return getNumbers(sortOrder).then(numbers => 
      dispatch({
        payload: numbers,
        type: GET_NUMBERS,
      })
    )
  };
}

export const initialState = {
  isFetchingNumbers: false,
  numbers: [],
};

export const initState = (initialstate) => initialState;

export function reducer(state=initialState, action) {
  switch (action.type) {
    case GET_NUMBERS :
    case GENERATE_NUMBERS: 
      return {
        ...state,
        numbers: action.payload,
        isFetchingNumbers: false,
      };
    case IS_FETCHING_NUMBERS:
      return {
        ...state,
        isFetchingNumbers: true,
      };
    default:
      return state;
  }
}
