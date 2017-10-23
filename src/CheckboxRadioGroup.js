import React from 'react';
import PropTypes from 'prop-types';
const CheckboxRadioGroup = props => (
  <fieldset className="fieldset-inputs sans col-md-4 col-sm-6 col-xs-12">
    <legend className="sr-only">{props.label}</legend>
    {props.options.map(opt => {
      return (
        <label key={opt}>
          <input
            className={props.fieldClassName}
            name={props.name}
            onChange={props.handleOnChange}
            value={opt}
            checked={props.selectedOptions.indexOf(opt) > -1}
            type={props.type}
          />
          <span>{opt}</span>
        </label>
      );
    })}
  </fieldset>
);

CheckboxRadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  fieldClassName: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array,
  handleOnChange: PropTypes.func.isRequired,
};

export default CheckboxRadioGroup;
