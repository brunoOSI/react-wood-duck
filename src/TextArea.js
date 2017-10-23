import React from 'react';
import PropTypes from 'prop-types';

const TextArea = props => (
  <div className="form-group">
    <div className={props.gridClassName}>
      <label className="form-label" htmlFor={props.name}>
        {props.label}
        <textarea
          className={props.labelClassName}
          style={props.resize ? null : { resize: 'none' }}
          name={props.name}
          rows={props.rows}
          value={props.value}
          onChange={props.handleOnChange}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  </div>
);

TextArea.propTypes = {
  gridClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  label: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  resize: PropTypes.bool,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
};

export default TextArea;
