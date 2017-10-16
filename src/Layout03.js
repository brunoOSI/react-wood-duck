import React from 'react';
import PropTypes from 'prop-types';
import GlobalHeader from './GlobalHeader.js';
import PageHeader from './PageHeader.js';
import SideNav from './SideNav.js';

class Layout03 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <GlobalHeader/>
        <PageHeader/>
        <SideNav content={[{ type: "navLinks", navItems: [
                          {type: "navLink", text: "Tommy Cambell", href: "#", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Aubrey Cambell", href:"#", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Chris Cambell", href: "#", preIcon: "fa fa-user"},
                       ]
                     }]}/>
          <div>
            {this.props.children}
          </div>
      </div>
    );
  }
}
Layout03.PropTypes = {

};
Layout03.defaultProps = {
  
};
export default Layout03;
