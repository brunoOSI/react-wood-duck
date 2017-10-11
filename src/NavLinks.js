import React from 'react';
import NavLink from './NavLink';

const NavLinks = (props) => {
    console.warn(props.navLinks);
    if(props.navLinks) {
	const navLinksComponents = props.navLinks.navItems.map( 
           function(navItem) {
	      if(navItem.type == "navLink") {
	         return <NavLink text={navItem.text} href={navItem.href} preIcon={navItem.preIcon} postIcon={navItem.postIcon}/>
	      } else if(navItem.type == "navLinks") {
	          return (<NavLink text={navItem.text} href={navItem.href} preIcon={navItem.preIcon} postIcon={navItem.postIcon}>
                             <NavLinks className="double-gap-left" navLinks={navItem} />
                          </NavLink>
                  );
	       }
	   });
	return (
	   <ul className={`nav nav-stacked ${props.className}`}>
	      {navLinksComponents}
	   </ul>
	);
    } else {
	return null;
    }
}

export default NavLinks;
