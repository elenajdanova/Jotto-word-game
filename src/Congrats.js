import React from 'react';
import PropTypes from 'prop-types';


/**
 * Functional component for congrulatory msg
 * @Function
 * @param {object} props - teact props
 * @returns {JSX.Element} Rendered component (or null if 'sucess' prop is faulse)
 */
const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-msg">Congratulations! You guessed the word!</span>
      </div>
    )
  } else {
    return <div data-test="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};
export default Congrats;
