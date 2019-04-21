import React from 'react';
import { css } from 'glamor';


const phoneNumbersStyles = css({
  marginTop: '30px',
  overflowX: 'auto',
  height: '50vh',
  maxHeight: '60vh',
  backgroundColor: '#242124',
  columnCount: 4,
  columnFill: 'auto',
  padding: '10px',
  borderRadius: '5px',
});

const numberListStyles = css({
  marginTop: 0,
});

const numberStyles = css({
  padding: '2px',
  fontSize: '18',
});

const loaderStyles = css({
  fontSize: '14pt',
  fontWeight: 'bold',
});

function PhoneNumbers({numbers, isFetchingNumbers }) {
  return (
    <div {...phoneNumbersStyles}>
      { isFetchingNumbers 
        ? <div {...loaderStyles}> Loading...</div>
        : (
            <ol {...numberListStyles} id="copyNumbers">
              {numbers.map((number) => <li {...numberStyles} key={number}>{number}</li>)}
            </ol> 
          )
      }
    </div>
  );
}

export default PhoneNumbers;

