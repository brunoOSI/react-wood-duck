import React from 'react';
import PropTypes from 'prop-types';

const Cards = props => (
  <div className="bg-lightest-grey container">
    <div className="card edit double-gap-top">
      <div className="card-header">
        <span>{props.cardHeaderText}</span>
      </div>
      <div className="card-body">
        {props.children}
        <div className="clearfix" />
      </div>
    </div>
  </div>
);

Cards.propTypes = {
  cardHeaderText: PropTypes.string,
  children: PropTypes.any,
};

export default Cards;
