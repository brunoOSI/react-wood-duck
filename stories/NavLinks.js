import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NavLinks from '../src/NavLinks';

const testNavItems = { type: "navLinks", navItems: [
                          {type: "navLink", text: "Tommy Cambell", href: "#", className: "", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Aubrey Cambell", href:"#", className: "", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Chris Cambell", href: "#", className: "", preIcon: "fa fa-user"},
                       ]
                     };

const testNavItemsWithInnerNav = {type: "navLinks", text: "", href: "", navItems: [
                                    {type: "navLink", text: "Screener Summary", href: "#", className: ""},
                                    {type: "navLink", text: "Allgeations & Disposition", href: "#", className: ""},
                                    {
                                       type: "navLinks", text: "People & Roles", href:"#", navItems: [
                                          {type: "navLink", text: "Tommy Cambell", href: "#", className: "", preIcon: "fa fa-user", postIcon: "fa fa-exclamation-triangle c-red"},
                                          {type: "navLink", text: "Aubrey Cambell", href:"#", className: "", preIcon: "fa fa-user"},
                                          {type: "navLink", text: "Chris Cambell", href: "#", className: "", preIcon: "fa fa-user"},
                                       ]
                                    },
                                   {type: "navLink", text: "History of Involvement", href: "#", className: ""},
                                   {type: "navLink", text: "Relationships", href:"#", className: ""},
                                   {type: "navLink", text: "Contacts", href: "#", className: ""},
                                   {type: "navLink", text: "Risk & Safety Assessment", href: "#", className: ""},
                                   {type: "navLink", text: "Home Assessment", href: "#", className: ""},
                                   {type: "navLink", text: "Decision", href: "#", className: "", postIcon: "fa fa-exclamation-triangle c-red"}
                               ]};

storiesOf('NavLinks', module)
   .addDecorator(story => (
      <div className="container col-md-3">
        {story()}
      </div>
   ))
   .add('With no Navigation links', () => (
	<div>
		<NavLinks navLinks="" />
	</div>
   ))
   .add('With Navigation links', () => (
   	<div>
		<NavLinks navLinks={testNavItems} />	
	</div>
   ))
   .add('With Navigation Links & Sub navigation links ', () => (
	<div>
		<NavLinks navLinks={testNavItemsWithInnerNav} />
	</div>
   ))
;
