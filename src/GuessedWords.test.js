import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{guessedWord: 'foooyi', letterMatchCount: 3}]
};

/**
 * Factory fn to create a shallow wrapper for the GuessedWords component
 * @function setup
 * @param {object} props - Component props specific this setup
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />)
};

test('does not throw warning with expected prop types', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instrs');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {

});
