import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

class NavLinks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.debug(this.props.navLinks);
        if(!this.props.navLinks || !this.props.navLinks.navItems || this.props.navLinks.navItems.length == 0) {
            console.warn("No NavLinks found to render in " + this.props.navLinks);
            return null;
        }
        const navLinksComponentsList =
            this.props.navLinks.navItems.map(function(navItem){
                const navLinkProps = {key: navItem.text, text: navItem.text, href: navItem.href, preIcon: navItem.preIcon, postIcon: navItem.postIcon, handleClick: this.props.handleClick, active: (this.props.activeNavLinkHref == navItem.href), indentationLevel: this.props.indentationLevel};
                const navLinkChildren = ((navItem.type == "navLinkWithInnerNav") ? <NavLinks navLinks={navItem} handleClick={this.props.handleClick} activeNavLinkHref={this.props.activeNavLinkHref} indentationLevel={this.props.indentationLevel+1}/> : null);
	            return (<NavLink {...navLinkProps}>
                                {navLinkChildren}
                            </NavLink>
                           );
	        }, this);
        return (<ul className='nav nav-stacked'>
                    {navLinksComponentsList}
                </ul>)
    }
}

NavLinks.PropTypes = {
    navLinks: PropTypes.string.isRequired,
    indentationLevel: PropTypes.number,
    activeNavLinkHref: PropTypes.string,
    handleClick: PropTypes.func,
}

NavLinks.defaultProps = {
   indentationLevel: 0
}

export default NavLinks;
