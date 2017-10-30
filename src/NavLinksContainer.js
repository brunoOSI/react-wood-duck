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
    return this.props.navLinks && this.props.navLinks.length > 0
      ? this.props.navLinks[0].href
      : null;
  }

  handleNavLinkClick(href, e) {
    this.setState({ activeNavLinkHref: href });
  }

  render() {
    const { navLinks } = this.props;
    return (
      <NavLinks
        navLinks={navLinks}
        handleClick={this.handleNavLinkClick}
        activeNavLinkHref={this.state.activeNavLinkHref}
      />
    );
  }
}

NavLinksContainer.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavLinksContainer;
