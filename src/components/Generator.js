import React, { useEffect, useState } from 'react';
import { css } from 'glamor';

import { withRedux } from '../hoc/withRedux';
import { getNumbersAction, generateNumbersAction } from '../store';
import PhoneNumbers from './PhoneNumbers';
import Controller from './Controller'


const generatorStyles = css({
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  margin: 'auto',
  backgroundColor: '#000000',
  color: 'green',
  minHeight: '60vh',
  borderRadius: '3px',
  padding: '20px'
});


export function Generator({ getNumbers, state, generateNumbers }) {
  const [noOfNumbers, setNoOfNumbers] = useState(0)
  useEffect(() => {
    if (state.numbers.length < 1 && !state.isFetchingNumbers) {
      getNumbers();
    }
  }, [state.isFetchingNumbers]);
  return (
    <div {...generatorStyles}>
      <Controller 
        setNoOfNumbers={setNoOfNumbers} 
        noOfNumbers={noOfNumbers}
        generateNumbers={generateNumbers}
        getNumbers={getNumbers}
      />
      <PhoneNumbers 
        numbers={state.numbers} 
        isFetchingNumbers={state.isFetchingNumbers}
      />
    </div>
  );
}

const dispatchActions = {
  getNumbers: getNumbersAction,
  generateNumbers: generateNumbersAction,
};

export default withRedux(Generator, dispatchActions);