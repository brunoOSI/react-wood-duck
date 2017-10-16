import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NavLinks from '../src/NavLinks';

const simpleNavLinks = { type: "navLinks", navItems: [
                          {type: "navLink", text: "Tommy Cambell", href: "#", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Aubrey Cambell", href:"#", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Chris Cambell", href: "#", preIcon: "fa fa-user"},
                       ]
                     };

const singleNavLinkWithInnerNav = { type: "navLinks", navItems: [
                                   {
                                       type: "navLinkWithInnerNav", text: "People & Roles", href:"#", navItems: [
                                          {type: "navLink", text: "Tommy Cambell", href: "#", preIcon: "fa fa-user", postIcon: "fa fa-exclamation-triangle c-red"},
                                          {type: "navLink", text: "Aubrey Cambell", href:"#", preIcon: "fa fa-user"},
                                          {type: "navLink", text: "Chris Cambell", href: "#", preIcon: "fa fa-user"},
                                       ]
                                    }
                                   ]
                                };
const navLinksWithInnerNav = {type: "navLinks", navItems: [
                                    {type: "navLink", text: "Screener Summary", href: "#"},
                                    {type: "navLink", text: "Allgeations & Disposition", href: "#"},
                                    {
                                       type: "navLinkWithInnerNav", text: "People & Roles", href:"#", navItems: [
                                          {type: "navLink", text: "Tommy Cambell", href: "#", preIcon: "fa fa-user", postIcon: "fa fa-exclamation-triangle c-red"},
                                          {type: "navLink", text: "Aubrey Cambell", href:"#", preIcon: "fa fa-user"},
                                          {type: "navLink", text: "Chris Cambell", href: "#", preIcon: "fa fa-user"},
                                       ]
                                    },
                                   {type: "navLink", text: "History of Involvement", href: "#"},
                                   {type: "navLink", text: "Relationships", href:"#"},
                                   {type: "navLink", text: "Contacts", href: "#"},
                                   {type: "navLink", text: "Risk & Safety Assessment", href: "#"},
                                   {type: "navLink", text: "Home Assessment", href: "#"},
                                   {type: "navLink", text: "Decision", href: "#", postIcon: "fa fa-exclamation-triangle c-red"}
                               ]};

storiesOf('NavLinks', module)
   .addDecorator(story => (
      <div className="container col-md-3">
        {story()}
      </div>
   ))
   .add('No Navigation links', () => (
	<NavLinks navLinks="" />
   ))
   .add('Simple Navigation links', () => (
        <NavLinks navLinks={simpleNavLinks} />
   ))
   .add('Single navigation link with sub navigation links', () => (
        <NavLinks navLinks={singleNavLinkWithInnerNav} />
   ))
   .add('List of Navigation Links with Sub navigation links ', () => (
	<NavLinks navLinks={navLinksWithInnerNav} />
   ))
;
