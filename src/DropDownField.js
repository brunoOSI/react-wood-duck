import React from 'react';
import PropTypes from 'prop-types';
const DropDownField = props => (
  <div className="form-group">
    <div className={props.gridClassName}>
      <label>{props.label}</label>
      <select
        name={props.name}
        value={props.selectedOption}
        onBlur={props.handleOnChange}
        onChange={props.handleOnChange}
        className={props.selectClassName}
        disabled={props.disable}
      >
        <option value="">{props.placeholder}</option>
        {props.options.map(opt => {
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  </div>
);

DropDownField.propTypes = {
  gridClassName: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  selectClassName: PropTypes.string,
  disable: PropTypes.bool,
};

export default DropDownField;
