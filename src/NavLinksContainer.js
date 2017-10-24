import React from 'react';
import NavLink from './NavLink';
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
    console.trace('href: ' + href + ', event: ' + e);
    this.setState({ activeNavLinkHref: href });
  }

  render() {
    console.log('inside nv container render : ' + this.props.navLinks);
    return (
      <NavLinks
        navLinks={this.props.navLinks}
        handleClick={this.handleNavLinkClick}
        activeNavLinkHref={this.state.activeNavLinkHref}
      />
    );
  }
}

export default NavLinksContainer;