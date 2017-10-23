import React from 'react';
import PropTypes from 'prop-types';
import DateTime from 'react-datetime';

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
    };
    this._handleChange = this._handleChange.bind(this);
    this._renderDatePicker = this._renderDatePicker.bind(this);
  }
  _handleChange(e) {
    this.setState({
      startDate: e._d,
    });
  }
  _renderDatePicker() {
    return (
      <DateTime
        value={this.state.startDate}
        onChange={e => this._handleChange(e)}
        timeFormat={this.props.timeFormat}
      />
    );
  }
  render() {
    return <div>{this._renderDatePicker()}</div>;
  }
}

DateTimePicker.propTypes = {
  timeFormat: PropTypes.bool,
};

DateTimePicker.defaultProps = {
  timeFormat: true,
};

export default DateTimePicker;
