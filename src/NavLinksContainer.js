import React from 'react';
import PropTypes from 'prop-types';
import NavLinks from './NavLinks';

class NavLinksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeNavLinkHref: this.getDefaultActiveNavLinkHref() };
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this);
  }

  getDefaultActiveNavLinkHref() {
    return this.props.navLinks &&
      this.props.navLinks.navItems &&
      this.props.navLinks.navItems.length > 0
      ? this.props.navLinks.navItems[0].href
      : null;
  }

  handleNavLinkClick(href, e) {
    this.setState({ activeNavLinkHref: href });
  }

  render() {
    return (
      <NavLinks
        navLinks={this.props.navLinks}
        handleClick={this.handleNavLinkClick}
        activeNavLinkHref={this.state.activeNavLinkHref}
      />
    );
  }
}

NavLinksContainer.propTypes = {
  navLinks: PropTypes.object.isRequired,
};

export default NavLinksContainer;
