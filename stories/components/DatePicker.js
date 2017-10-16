import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import DatePicker from '../../src/DatePicker';

const styles = { paddingTop: '20px' };
const CenterDecorator = (storyFn) => (
  <div className='container' style={ styles} >
    { storyFn() }
  </div>
);

const DatePickerStory = () => (
  <DatePicker 
    gridClassName='col-md-12 col-sm-12 col-xs-12'
    label="Date"
    placeholder='mm/dd/yyyy'
  />
);

storiesOf('In Progress', module)
  .addDecorator(CenterDecorator)
  .add('DatePicker', DatePickerStory);