import React from 'react';
import renderer from 'react-test-renderer';

import PhoneNumbers from './PhoneNumbers';

describe('<PhoneNumbers />', () => {
  const props = {
    isFetchingNumbers: false,
    numbers: [
      '0032232152',
      '0951119083',
      '0987547892',
      '0909823787',
      '0232447837',
    ],
  };

  it('should render successfully', () => {
    const tree = renderer.create(<PhoneNumbers {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
