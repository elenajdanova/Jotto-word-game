/**
 * @function getLetterMatchCount
 * @param {string} - guessed word
 * @param {string} - secret word
 * @returns {number} - number of letters matched between guessed and secret words
 */

export function getLetterMatchCount(guessedWord, secretWord) {
  // const secretLetterSet = new Set(secretWord.split(''));
  // const guessedLetterSet = new Set(guessedWord.split(''));
  //
  // return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
  const secretLetters = secretWord.split('');
  const guessedLetters = guessedWord.split('');

  return secretLetters.filter(letter => guessedLetters.includes(letter)).length;
};
