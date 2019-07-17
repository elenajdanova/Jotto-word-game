import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instrs">
        Try to guess the secret word!
      </span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, i) => (
      <tr data-test="guessed-word" key={i}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));

    contents = (
      <div data-test="guessed-list">
        <h4>Guessed Words</h4>
        <table className="table table-sm">
          <thead  className="cyan">
            <tr><th>Guess</th><th>Matching Letters</th></tr>
          </thead>
          <tbody>
            { guessedWordsRows }
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div data-test="component-guessed-words" className="guessed">
      {contents}
    </div>
  );
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
