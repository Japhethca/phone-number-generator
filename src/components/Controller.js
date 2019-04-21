import React from 'react';
import {css} from 'glamor';

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
  minWidth: '150px',
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
      <form onSubmit={(e) => {
          e.preventDefault();
          getOrGenerateNumbers(noOfNumbers);
        }}>
        <input {...inputStyles} 
          type="number"  
          value={noOfNumbers} 
          onChange={handleInputChange}
          placeholder="size of numbers"
          max="10000"
          min="0"
        />
        <button id="button" {...buttonStyles}>
          Generate Numbers
        </button>
      </form>
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