import React, { useContext } from 'react';

import { StoreContext } from '../store';

export function withRedux(Component, dispatchActions) {
  return function Wrapped(props) {
    const {dispatch, state} = useContext(StoreContext);
    const dispatchProps = {};
    Object.keys(dispatchActions).map(dispatchName => {
      dispatchProps[dispatchName] = (...params) => 
        dispatchActions[dispatchName](...params)(dispatch);
    });
    return (
      <Component state={state} {...props} {...dispatchProps} />
    );
  };
}