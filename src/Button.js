import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const btnClass = `btn btn-${props.btnClassName}`;
  return (
    <div className="row">
      <button className={btnClass} disabled={props.disabled}>
        {props.btnName}
      </button>
    </div>
  );
};

Button.propTypes = {
  btnClassName: PropTypes.string,
  btnName: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
