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
  console.log(wrapper.debug());
}
setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders without error', () => {

    });
    test('renders input box', () => {

    });
    test('renders submit button', () => {

    });
  });

  describe('word has been guessed', () => {
    test('renders without error', () => {

    });
    test('does not render input box', () => {

    });
    test('does not render submit button', () => {

    });
  });
});

describe('update state', () => {

});
