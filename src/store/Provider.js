import React, { useReducer } from 'react';

import {reducer, initState, initialState, StoreContext} from '../store';

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, initState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}