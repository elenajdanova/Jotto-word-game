import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../src/reducers';


/**
 * Create a testing store with imported reducers, middleware and initial state.
 * globals: rootReducer
 * @function storeFactory
 * @param {object} initialState - initial stet for storeFactory
 * @returns {Store} - Redux store
 * */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

/**
 * Returns ShallowWrapper containing node(s) with the given data-test value
 * @function findByTestAttr
 * @param {ShallowWrapper } wraper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test attr for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
  const propErr = checkPropTypes(
    component.propsTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propErr).toBeUndefined();
}
