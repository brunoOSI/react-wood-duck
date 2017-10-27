import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NavLinksContainer from '../../src/NavLinksContainer';

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
                                {type: "navLink", text: "Relationships", href:"#relactionships"},
                                {type: "navLink", text: "Contacts", href: "#contacts"},
                                {type: "navLink", text: "Risk & Safety Assessment", href: "#risk"},
                                {type: "navLink", text: "Home Assessment", href: "#homeAssessment"},
                                {type: "navLink", text: "Decision", href: "#decision", postIcon: "fa fa-exclamation-triangle c-red"}
                             ];
const codeStyle = "color:powderblue";

storiesOf('Sub Components/NavLinksContainer', module)
   .add('NavigationLinksContianer', withInfo(
 `
    #### Usage
    - Use this component when there is a need to render a group of navigation links with active navlink highlighter

    - *navLinks* property describes navigation links details to be rendered.
        *navLinks* property used for the current story:
                <pre><code style=${codeStyle}>
                    [
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
                </code></pre>

    - *navLinks* property takes an array of 'navLink'/'navLinkWithInnerNav' type elements.

    - *navLinks* property array has type 'navLink' element when there is a need to render a simple navigation link. It could look like below. 'navLink' type element takes type, text, href, preIcon, postIcon properties.
                <pre><code style=${codeStyle}>{type: 'navLink', text: 'Screener Summary', href: '#screenerSummary'}</code></pre>

    - *navLinks* property array has type 'navLinkWithInnerNav' elements to render an inner/nested nav. It could look like below.
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
    - Surround NavLinksContainer component with <div role="navigation"> or <nav>.
 `)(() => (
        <div className="container col-md-3">
           <NavLinksContainer navLinks={navLinksWithInnerNav} />
        </div>
   )))
;

