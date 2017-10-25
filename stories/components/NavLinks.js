import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NavLinks from '../../src/NavLinks';

const basicNavLinksUsage =
 `
    ###### Basic NavLinks Usage
        - Use NavLinks component to render group of navigation links.

        - NavLinks component can render nested navlinks. An example of this is shown in one of the stories.

        - navLinks property takes an object with key/value pairs. It's type is defined as 'navLinks'.

        - navLinks.navItems property which is an array of 'navlink'/'navlinkWithInnerNav' type elements.

        - navLinks.navItems array has type 'navlink' elements when there is a need to render a simple navigation link. 'navlink' type element takes type, text, href, preIcon, postIcon properties.
            Example :
                {type: 'navLink', text: 'Screener Summary', href: '#screenerSummary'}

        - navLinks.navItems array has type 'navlinkWithInnerNav' elements to render an inner nav.
            Example:
                    {
                        type: "navLinkWithInnerNav", text: "People & Roles", href:"#pplroles", navItems: [
                            {type: "navLink", text: "Tommy Cambell", href: "#tommy", preIcon: "fa fa-user", postIcon: "fa fa-exclamation-triangle c-red"},
                            {type: "navLink", text: "Aubrey Cambell", href:"#aubrey", preIcon: "fa fa-user"},
                            {type: "navLink", text: "Chris Cambell", href: "#chris", preIcon: "fa fa-user"}
                        ]
                    }

    ###### Accessibility
        - Surround NavLinks component with <div role="navigation"> or <nav>.

 `;

const simpleNavLinks = { type: "navLinks", navItems: [
                          {type: "navLink", text: "Tommy Cambell", href: "#tom", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Aubrey Cambell", href:"#aub", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Chris Cambell", href: "#chr", preIcon: "fa fa-user"},
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
                               ]};

storiesOf('Components/NavLinks', module)
   .add('Simple Navigation links', withInfo(`
       #### Usage
        - Provide navLinks property with navigation links details to render.

        - Simple navLinks property value :
               { type: "navLinks", navItems: [
                     {type: "navLink", text: "Tommy Cambell", href: "#tom", preIcon: "fa fa-user"},
                     {type: "navLink", text: "Aubrey Cambell", href:"#aub", preIcon: "fa fa-user"},
                     {type: "navLink", text: "Chris Cambell", href: "#chr", preIcon: "fa fa-user"},
                 ]
               }
        * * *
        ${basicNavLinksUsage}
     `)(() => (
        <div className="container col-md-3" role="navigation">
           <NavLinks navLinks={simpleNavLinks} handleClick={function() {return false;}}/>
        </div>
   )))
   .add('List of Navigation Links with nested navigation links ', withInfo(`
       #### Usage
         - Provide navLinks property with navigation links details to render

         - navLinks property value with nested navigation links:
                      {type: "navLinks", navItems: [
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
                          ]
                      }

       * * *
       ${basicNavLinksUsage}
       `)(() => (
        <div className="container col-md-3" role="navigation">
	   <NavLinks navLinks={navLinksWithInnerNav} handleClick={function() {return false;}}/>
        </div>
   )))
;
