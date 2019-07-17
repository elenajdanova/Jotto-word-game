import React from 'react';
import {shallow} from 'enzyme';

import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../test/testUtils';

const defaultProps = { success: false };

/**
 * Factory fn to create a shallow wrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific this setup
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...setupProps}/>);
  return wrapper;
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when "success" props is false', () => {
  const wrapper = setup({success: false});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non empty congrats msg when "success" prop is true', () => {
  const wrapper = setup({success: true});
  //console.log(wrapper.debug());
  const msg = findByTestAttr(wrapper, 'congrats-msg');
  expect(msg.text().length).not.toBe(0);
});

test('doesnt throw warning with expected prop types', () => {
  const expectedProps = {success: false};
  checkProps(Congrats, expectedProps);
});
