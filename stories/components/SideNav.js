import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SideNav from '../../src/SideNav';

const codeStyle = "color:powderblue";
const navLinks = [
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
                        ]}
                   ];

const CenterDecorator = story => (
    <div>{story()}</div>
);
const SideNavStory = withInfo(
 `
    #### Usage
    - A side navigation component renders different types of content based on the content property value. For now it can just render a group of navigation links.

    - Its functionality can be extended to render other types of elements apart from navigation links.

    - It uses content property to render different types of content.

    - content property is an array objects. Each object takes form of { type: 'elementtype', otherPropsToRenderThisElement: {'other props value'} }.
    
    - To render a group of navigations links in Side Nav, content property could look like :
               <pre><code style=${codeStyle}>     
                   [
                        {type: "navLinks", navItems: [
                            {type: "navLink", text: "Screener Summary", href: "#screenerSummary"},
                            {type: "navLink", text: "Allgeations & Disposition", href: "#allegations"},
                            {type: "navLink", text: "History of Involvement", href: "#history"},
                        ]
                        }   
                   ]
        </code></pre>

    - To render nested navigation links, content property could look like :
            <pre><code style=${codeStyle}>
                [
                    {type: "navLinks", navItems: [
                        {type: "navLink", text: "Screener Summary", href: "#screenerSummary"},
                        {
                            type: "navLinkWithInnerNav", text: "People & Roles", href:"#pplroles", navItems: [
                                {type: "navLink", text: "Aubrey Cambell", href:"#aubrey", preIcon: "fa fa-user"},
                                {type: "navLink", text: "Chris Cambell", href: "#chris", preIcon: "fa fa-user"}
                            ]
                        },
                        {type: "navLink", text: "Allgeations & Disposition", href: "#allegations"},
                        {type: "navLink", text: "History of Involvement", href: "#history"},
                    ]
                    }
                ]

    - SideNav depends on NavLinksContainer component to render a group of navigation links. To know more details about how to construct content property with navLinks type, please refer to NavLinksContainer component in storybook.
 
 `)(() => (<div>
    <div className="row">
        <SideNav content={navLinks} columnWidth={3} />
    </div>
  </div>
));

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('SideNav', SideNavStory);
