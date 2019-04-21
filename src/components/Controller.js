import React from 'react';
import {css} from 'glamor';
import Clipboard from 'clipboard';

const controllerStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const buttonStyles = css({
  padding: '10px',
  position: 'relative',
  fontSize: '12pt',
  marginLeft: '10px',
  borderRadius: '5px',
  fontWeight: 'bold',
  backgroundColor: '#00A550',
  border: 0,
  ':hover': {
    backgroundColor: '	#006400'
  }
});

const inputStyles = css({
  padding: '10px',
  outline: 0,
  border: 0,
  borderRadius: '10px'
});

const sortOrderSelectStyles = css({
  marginLeft: '20px',
  padding: '5px',
  fontSize: '12pt',
});

export default function Controller({ 
  getNumbers, 
  generateNumbers, 
  noOfNumbers, 
  setNoOfNumbers,
}) {
  const getOrGenerateNumbers = (noOfNumbers) => {
    return noOfNumbers ? generateNumbers(noOfNumbers) : getNumbers();
  };

  const selectChange = (event) => {
    const selectedSortValue = event.target.value;
    return getNumbers(selectedSortValue);
  };

  const handleInputChange = (event) => setNoOfNumbers(event.target.value);
  return (
    <div {...controllerStyles}>
      <input {...inputStyles} 
        type="number"  
        value={noOfNumbers} 
        onChange={handleInputChange}
        placeholder="size of numbers"
        maxLength="8"
        required
      />
      <button id="button" {...buttonStyles} onClick={() => getOrGenerateNumbers(noOfNumbers)}>
        Generate Numbers
      </button>
      <div>
        <select onChange={selectChange} name="sortOrder" id="" {...sortOrderSelectStyles}>
          <option value="">Sort Order</option>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
    </div>
  );
}