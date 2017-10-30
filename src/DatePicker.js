import React from 'react';
import PropTypes from 'prop-types';

const DatePicker = ({
  gridClassName,
  fieldClassName,
  labelClassName,
  id,
  label,
  onChange,
  value,
  placeholder,
  type,
}) => (
  <div className="form-group">
    <div className={gridClassName}>
      <label className={labelClassName} htmlFor={id}>
        {label}
        <input
          className={fieldClassName}
          pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
          id={id}
          type="date"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  </div>
);

DatePicker.propTypes = {
  gridClassName: PropTypes.string,
  fieldClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  id: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  type: PropTypes.func,
};

export default DatePicker;
