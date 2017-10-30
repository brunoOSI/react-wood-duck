import React from 'react';
import PropTypes from 'prop-types';
import GlobalHeader from './GlobalHeader.js';
import PageHeader from './PageHeader.js';

class Layout01 extends React.Component {
  render() {
    return (
      <div>
        <GlobalHeader />
        <PageHeader />
        <div>{this.props.children}</div>
      </div>
    );
  }
}
Layout01.propTypes = { children: PropTypes.any };
Layout01.defaultProps = {};

export default Layout01;
