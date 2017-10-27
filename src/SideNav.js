import React from 'react';
import PropTypes from 'prop-types';
import NavLinksContainer from './NavLinksContainer';

class SideNav extends React.Component {
  render() {
    const classField = `container hidden-xs col-md-${this.props
      .columnWidth} side-nav`;
    if (!this.props.content || this.props.content.length === 0) {
      return null;
    } else {
      const sideNavComponents = this.props.content.map(function(
        sideNavItem,
        index
      ) {
        if (sideNavItem.type === 'navLinks')
          return (
            <div
              className="row"
              key={index}
              role="navigation"
              aria-label="Main Content Navigation Menu"
            >
              <NavLinksContainer navLinks={sideNavItem.navItems} />
            </div>
          );
      });
      return (
        <div className={classField} aria-label="Side Nav">
          {sideNavComponents}
        </div>
      );
    }
  }
}

SideNav.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnWidth: PropTypes.number,
};

SideNav.defaultProps = {
  columnWidth: 3,
};

export default SideNav;
