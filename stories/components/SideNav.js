import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SideNav from '../../src/SideNav';

const simpleNavLinks = [{ type: "navLinks", navItems: [
                          {type: "navLink", text: "Tommy Cambell", href: "#", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Aubrey Cambell", href:"#", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Chris Cambell", href: "#", preIcon: "fa fa-user"},
                       ]
                     }];

const CenterDecorator = story => (
    <div>{story()}</div>
);
const SideNavStory = () => (<div>
    <div className="row">
        <SideNav content={simpleNavLinks} columnWidth={3} />
    </div>
  </div>
);

storiesOf('Components/SideNav', module)
  .addDecorator(CenterDecorator)
  .add('SideNav', SideNavStory);
