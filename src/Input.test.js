import React from 'react';
import {shallow} from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * Factory fn to create a shallow wrapper for the Input component
 * @function setupinitialState - Initial state specific this setup
 * @returns {ShallowWrapper}
 */

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  //.dive().dive(); - for dive and see Input component itself, but not the redux he is connected with as a HOC
  const wrapper = shallow(<Input store={store}/>).dive().dive();
  //console.log(wrapper.debug());
  return wrapper;
}

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const input = findByTestAttr(wrapper, 'input-box');
      expect(input.length).toBe(1);
    });
    test('renders submit button', () => {
      const btn = findByTestAttr(wrapper, 'submit-btn');
      expect(btn.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('does not render input box', () => {
      const input = findByTestAttr(wrapper, 'input-box');
      expect(input.length).toBe(0);
    });
    test('does not render submit button', () => {
      const btn = findByTestAttr(wrapper, 'submit-btn');
      expect(btn.length).toBe(0);
    });
  });
});

describe('update state', () => {

});
