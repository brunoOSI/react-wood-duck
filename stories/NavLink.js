import React from 'react';
import { storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NavLink from '../src/NavLink';

storiesOf('NavLink', module)
   .addDecorator(story => (
         <div className="container col-md-3">
            <div className="row">
               <ul className="nav nav-stacked">
                  {story()}
	       </ul>
            </div>
         </div>
   ))
   .add('Default', () => (
      <NavLink href="test.html" text="Nav Link" />      
   ))
   .add('With Pre Icon', () => (
      <NavLink href="test.html" text="Nav Link" preIcon="fa fa-user" />
   ))
   .add('With Post Icon', () => (
      <NavLink href="test.html" text="Nav Link" postIcon="fa fa-exclamation-triangle c-red" />
   ))
   .add('With Pre & Post Icons', () => (
      <NavLink href="#" text="Nav Link" preIcon="fa fa-user" postIcon="fa fa-exclamation-triangle c-red" />
   ))
;
