import React from 'react';
import renderer from 'react-test-renderer';

import { Generator } from './Generator';

describe('<Generator />', () => {
  const props = {
    getNumbers: jest.fn(), 
    state: {
      numbers: [],
      isFetchingNumbers: false,
    }, 
    generateNumbers: jest.fn(),
  };


  it('should render successfully', () => {
    const tree = renderer.create(<Generator {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
