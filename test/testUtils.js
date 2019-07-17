import checkPropTypes from 'check-prop-types';

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
