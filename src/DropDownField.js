import React from 'react';
import PropTypes from 'prop-types';

const DropDownField = props => (
  <div className="form-group">
    <div className={props.gridClassName}>
      <label>{props.label}</label>
      <select
        name={props.name}
        id={props.id}
        value={props.selectedOption}
        onChange={props.onChange}
        onBlur={props.onChange}
        className={props.selectClassName}
        disabled={props.disable}
      >
        <option value="">{props.placeholder}</option>
        {props.options.map(opt => {
          return (
            <option key={opt.id} value={opt.id}>
              {opt.value}
            </option>
          );
        })}
      </select>
    </div>
  </div>
);

DropDownField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  gridClassName: PropTypes.string,
  label: PropTypes.string,
  selectClassName: PropTypes.string,
  disable: PropTypes.bool,
};

export default DropDownField;
