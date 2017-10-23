import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SideNav from '../../src/SideNav';

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
const SideNavStory = () => (<div>
    <div className="row">
        <SideNav content={navLinks} columnWidth={3} />
    </div>
  </div>
);

storiesOf('Components/SideNav', module)
  .addDecorator(CenterDecorator)
  .add('SideNav', SideNavStory);
