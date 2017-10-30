import React from 'react';
import PropTypes from 'prop-types';

const AddAdditionalItem = props => (
  <div className="list-item">{props.children}</div>
);

AddAdditionalItem.propTypes = {
  children: PropTypes.any,
};

export default AddAdditionalItem;
