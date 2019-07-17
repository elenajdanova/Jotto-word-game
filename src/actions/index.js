export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS'
};


/**
 * correctGuess - description
 * @return {object}  action obj with type "correct_guess"
 */
export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}
