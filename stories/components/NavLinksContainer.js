import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NavLinksContainer from '../../src/NavLinksContainer';

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
const codeStyle = "color:powderblue";

storiesOf('Sub Components/NavLinksContainer', module)
   .add('NavigationLinksContianer', withInfo(
 `
    #### Usage
    - Use this when there is a need to render a group of navigation links with active navlink highlighter

    - *navLinks* property describes the navLinks details to be rendered.
        *navLinks* property used for the current story:
                <pre><code style=${codeStyle}>
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
                            {type: "navLink", text: "Relationships", href:"#relactionships"},
                            {type: "navLink", text: "Contacts", href: "#contacts"},
                            {type: "navLink", text: "Risk & Safety Assessment", href: "#risk"},
                            {type: "navLink", text: "Home Assessment", href: "#homeAssessment"},
                            {type: "navLink", text: "Decision", href: "#decision", postIcon: "fa fa-exclamation-triangle c-red"}
                        ]
                    }
                </code></pre>

    - NavLinksContainer component can render nested navlinks. An example of this is shown in one of the stories.

    - *navLinks* property takes an object with key/value pairs. It's type is defined as 'navLinks'.

    - *navLinks.navItems* property which is an array of 'navLink'/'navLinkWithInnerNav' type elements.

    - navLinks.navItems array has type 'navLink' elements when there is a need to render a simple navigation link. 'navLink' type element takes type, text, href, preIcon, postIcon properties.
            Example :
                <pre><code style=${codeStyle}>{type: 'navLink', text: 'Screener Summary', href: '#screenerSummary'}</code></pre>

    - navLinks.navItems array has type 'navLinkWithInnerNav' elements to render an inner nav. It could look like below.
                <pre><code style=${codeStyle}>
                    {
                        type: "navLinkWithInnerNav", text: "People & Roles", href:"#pplroles", navItems: [
                            {type: "navLink", text: "Tommy Cambell", href: "#tommy", preIcon: "fa fa-user", postIcon: "fa fa-exclamation-triangle c-red"},
                            {type: "navLink", text: "Aubrey Cambell", href:"#aubrey", preIcon: "fa fa-user"},
                            {type: "navLink", text: "Chris Cambell", href: "#chris", preIcon: "fa fa-user"}
                        ]
                    }
                </code></pre>

    #### Accessibility
    - Surround NavLinks component with <div role="navigation"> or <nav>.
 `)(() => (
        <div className="container col-md-3">
           <NavLinksContainer navLinks={navLinksWithInnerNav} />
        </div>
   )))
;

