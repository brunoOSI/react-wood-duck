import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

class NavLinks extends React.Component {
  render() {
    const {
      navLinks,
      indentationLevel,
      activeNavLinkHref,
      handleClick,
    } = this.props;
    if (!navLinks || navLinks.length === 0) {
      return null;
    }
    const navLinksComponentsList = navLinks.map(function(currentNavLink) {
      const navLinkProps = {
        text: currentNavLink.text,
        href: currentNavLink.href,
        preIcon: currentNavLink.preIcon,
        postIcon: currentNavLink.postIcon,
        handleClick: handleClick,
        active: activeNavLinkHref === currentNavLink.href,
        indentationLevel: indentationLevel,
      };
      const navLinkChildren =
        currentNavLink.type === 'navLinkWithInnerNav' ? (
          <NavLinks
            navLinks={currentNavLink.navItems}
            handleClick={handleClick}
            activeNavLinkHref={activeNavLinkHref}
            indentationLevel={indentationLevel + 1}
          />
        ) : null;
      return (
        <NavLink key={currentNavLink.text} {...navLinkProps}>
          {navLinkChildren}
        </NavLink>
      );
    }, this);
    return <ul className="nav nav-stacked">{navLinksComponentsList}</ul>;
  }
}

NavLinks.propTypes = {
  /** List describing navigation links to be rendered */
  navLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Indentation Level of navigation links. Useful for nested navigation links */
  indentationLevel: PropTypes.number,
  /** Indicates Href of currently active navlink */
  activeNavLinkHref: PropTypes.string,
  /** Call back function for each navigation link */
  handleClick: PropTypes.func,
};

NavLinks.defaultProps = {
  indentationLevel: 0,
  activeNavLinkHref: '',
};

export default NavLinks;
