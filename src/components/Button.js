import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onClick, type, moreClasses, disabled, testId } = this.props;
    return (
      <button
        className={ `button ${moreClasses}` }
        type={ type }
        onClick={ onClick }
        disabled={ disabled }
        data-testid={ testId }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  moreClasses: PropTypes.string,
  disabled: PropTypes.bool,
  testId: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  moreClasses: '',
  disabled: false,
  testId: '',
};

export default Button;
