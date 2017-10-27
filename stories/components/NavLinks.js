import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NavLinks from '../../src/NavLinks';

const codeStyle = "color:powderblue";
const basicNavLinksUsage =
 `
    ###### Basic NavLinks Usage
        - Use NavLinks component to render a group of navigation links.

        - NavLinks component can render nested navlinks. An example of this is shown under the NavLinks menu.

        - *navLinks* property is an array of 'navLink'/'navLinkWithInnerNav' type elements.

        - *navLinks* array has type 'navLink' element when there is a need to render a simple navigation link. 'navLink' type element takes type, text, href, preIcon, postIcon properties. It could look like below.
               <pre><code style=${codeStyle}>{type: 'navLink', text: 'Screener Summary', href: '#screenerSummary'}</code></pre>

        - navLinks array has type 'navLinkWithInnerNav' elements to render an inner/nested nav. It could look like below.
              <pre><code style=${codeStyle}>
                 {
                     type: "navLinkWithInnerNav", text: "People & Roles", href:"#pplroles", navItems: [
                         {type: "navLink", text: "Tommy Cambell", href: "#tommy", preIcon: "fa fa-user", postIcon: "fa fa-exclamation-triangle c-red"},
                         {type: "navLink", text: "Aubrey Cambell", href:"#aubrey", preIcon: "fa fa-user"},
                         {type: "navLink", text: "Chris Cambell", href: "#chris", preIcon: "fa fa-user"}
                     ]
                 }
              </code></pre>

    ###### Accessibility
        - Surround NavLinks component with <div role="navigation"> or <nav>.

 `;

const simpleNavLinks = [
                          {type: "navLink", text: "Tommy Cambell", href: "#tom", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Aubrey Cambell", href:"#aub", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Chris Cambell", href: "#chr", preIcon: "fa fa-user"},
                       ];

const navLinksWithInnerNav = [
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
                             ];

storiesOf('Sub Components/NavLinks', module)
   .add('Simple Navigation links', withInfo(`
        #### Usage
        - Used to render a group of navigation links

        - *navLinks* property could look like below to render a groupd of navigation links.
                <pre><code style=${codeStyle}>
                    [
                        {type: "navLink", text: "Tommy Cambell", href: "#tom", preIcon: "fa fa-user"},
                        {type: "navLink", text: "Aubrey Cambell", href:"#aub", preIcon: "fa fa-user"},
                        {type: "navLink", text: "Chris Cambell", href: "#chr", preIcon: "fa fa-user"},
                    ]
                </code></pre>
        * * *
        ${basicNavLinksUsage}
     `)(() => (
        <div className="container col-md-3" role="navigation">
           <NavLinks navLinks={simpleNavLinks} handleClick={function() {return false;}}/>
        </div>
   )))
   .add('Nested navigation links ', withInfo(`
       #### Usage
         - Provide *navLinks* property with navigation links details to render

         - *navLinks* property could look like below for nested navigation links:
                  <pre><code style=${codeStyle}>    
                      [
                          {type: "navLink", text: "Screener Summary", href: "#screenerSummary"},
                          {type: "navLink", text: "Allgeations & Disposition", href: "#allegations"}:u
                          {
                              type: "navLinkWithInnerNav", text: "People & Roles", href:"#pplroles", navItems: [
                                  {type: "navLink", text: "Tommy Cambell", href: "#tommy", preIcon: "fa fa-user", postIcon: "fa fa-exclamation-triangle c-red"},
                                  {type: "navLink", text: "Aubrey Cambell", href:"#aubrey", preIcon: "fa fa-user"},
                                  {type: "navLink", text: "Chris Cambell", href: "#chris", preIcon: "fa fa-user"}
                              ]
                          },
                          {type: "navLink", text: "History of Involvement", href: "#history"},
                      ]
                  </code></pre>

       * * *
       ${basicNavLinksUsage}
       `)(() => (
        <div className="container col-md-3" role="navigation">
	   <NavLinks navLinks={navLinksWithInnerNav} handleClick={function() {return false;}}/>
        </div>
   )))
;
