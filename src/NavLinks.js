import React from 'react';
import NavLink from './NavLink';

const NavLinks = (props) => {
    console.debug(props.navLinks);
    if(props.navLinks && props.navLinks.navItems && props.navLinks.navItems.length > 0) {
        const classNameValue = (props.className ? `nav nav-stacked ${props.className}` : 'nav nav-stacked')
	const navLinksComponents = props.navLinks.navItems.map( 
           function(navItem) {
	      if(navItem.type == "navLink") {
	         return <NavLink key={navItem.text} text={navItem.text} href={navItem.href} preIcon={navItem.preIcon} postIcon={navItem.postIcon}/>
	      } else if(navItem.type == "navLinkWithInnerNav") {
	          return (<NavLink key={navItem.text} text={navItem.text} href={navItem.href} preIcon={navItem.preIcon} postIcon={navItem.postIcon}>
                             <NavLinks className="double-gap-left" navLinks={navItem} />
                          </NavLink>
                  );
	       }
	   });
	return (
	   <ul className={classNameValue}>
	      {navLinksComponents}
	   </ul>
	);
    } else {
        console.warn("No NavLinks found to render in " + props.navLinks);
	return null;
    }
}

export default NavLinks;
