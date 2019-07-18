import { actionTypes } from '../actions';

/**
 * @function successReducer
 * @param {array} state - arr of guessed GuessedWords
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 */
export default (state = false, action) => {
  switch(action.type) {
    case (actionTypes.CORRECT_GUESS): {
      return true;
    }
    default:
      return state;
  }
}