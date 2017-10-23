import React from 'react';
import { storiesOf } from '@storybook/react';
import NavLinks from '../../src/NavLinks';

const simpleNavLinks = { type: "navLinks", navItems: [
                          {type: "navLink", text: "Tommy Cambell", href: "#tom", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Aubrey Cambell", href:"#aub", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Chris Cambell", href: "#chr", preIcon: "fa fa-user"},
                       ]
                     };

const singleNavLinkWithInnerNav = { type: "navLinks", navItems: [
                                   {
                                       type: "navLinkWithInnerNav", text: "People & Roles", href:"#pplroles", navItems: [
                                          {type: "navLink", text: "Tommy Cambell", href: "#tommy", preIcon: "fa fa-user", postIcon: "fa fa-exclamation-triangle c-red"},
                                          {type: "navLink", text: "Aubrey Cambell", href:"#aubrey", preIcon: "fa fa-user"},
                                          {type: "navLink", text: "Chris Cambell", href: "#chris", preIcon: "fa fa-user"},
                                       ]
                                    }
                                   ]
                                };
const navLinksWithInnerNav = {type: "navLinks", navItems: [
                                    {type: "navLink", text: "Screener Summary", href: "#screenerSummary"},
                                    {type: "navLink", text: "Allgeations & Disposition", href: "#allegations"},
                                    {
                                       type: "navLinkWithInnerNav", text: "People & Roles", href:"#pplroles", navItems: [
                                          {type: "navLink", text: "Tommy Cambell", href: "#tommy", preIcon: "fa fa-user", postIcon: "fa fa-exclamation-triangle c-red"},
                                          {type: "navLink", text: "Aubrey Cambell", href:"#aubrey", preIcon: "fa fa-user"},
                                          {type: "navLink", text: "Chris Cambell", href: "#chris", preIcon: "fa fa-user"}
                                       ]
                                    },
                                   {type: "navLink", text: "History of Involvement", href: "#history"},
                                   {type: "navLink", text: "Relationships", href:"#relactionships"},
                                   {type: "navLink", text: "Contacts", href: "#contacts"},
                                   {type: "navLink", text: "Risk & Safety Assessment", href: "#risk"},
                                   {type: "navLink", text: "Home Assessment", href: "#homeAssessment"},
                                   {type: "navLink", text: "Decision", href: "#decision", postIcon: "fa fa-exclamation-triangle c-red"}
                               ]};

storiesOf('Components/NavLinks', module)
   .addDecorator(story => (
      <div className="container col-md-3">
        {story()}
      </div>
   ))
   .add('No Navigation links', () => (
	<NavLinks navLinks="" />
   ))
   .add('Simple Navigation links', () => (
        <NavLinks navLinks={simpleNavLinks} handleClick={function() {return false;}}/>
   ))
   .add('Single navigation link with sub navigation links', () => (
        <NavLinks navLinks={singleNavLinkWithInnerNav} handleClick={function() {return false;}}/>
   ))
   .add('List of Navigation Links with Sub navigation links ', () => (
	<NavLinks navLinks={navLinksWithInnerNav} handleClick={function() {return false;}}/>
   ))
;
