import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Controller from './Controller';

describe('<Controller />', () => {
  const props = {
    setNoOfNumbers: jest.fn(),
    noOfNumbers: 10,
    getNumbers: jest.fn(),
    generateNumbers: jest.fn(),
  };

  const getComponent = (newProps = props) => {
    const component = <Controller {...newProps}/>;
    return {
      component: mount(component),
      tree: renderer.create(component).toJSON(),
    };
  };

  it('should render successfully', () => {

    const { tree } = getComponent();
    expect(tree).toMatchSnapshot();
  });

  it('should generate numbers when button is clicked', () => {
    const { component } = getComponent();
    const form = component.find('form');
    form.simulate('submit');
    expect(props.generateNumbers).toHaveBeenCalledWith(props.noOfNumbers);
  });

  it('should get generated numbers when button is clicked', () => {
    const newProps = {
      ...props,
      noOfNumbers: 0,
    };
    const { component } = getComponent(newProps);
    const form = component.find('form');
    form.simulate('submit');
    expect(props.getNumbers).toHaveBeenCalled();
  });

  it('should handle input change', () => {
    const { component } = getComponent();
    const input = component.find('input');
    input.simulate('change', { target: { value: 5 }});
    expect(props.setNoOfNumbers).toHaveBeenCalledWith(5);
  });

  it('should handle sort order selection', () => {
    const { component } = getComponent();
    const selectInput = component.find('select');
    selectInput.simulate('change', { target: { value: 'ASC' }});
    expect(props.getNumbers).toHaveBeenCalled();
  });
});
