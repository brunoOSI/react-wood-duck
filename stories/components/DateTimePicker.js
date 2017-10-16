import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import DateTimePicker from '../../src/DateTimePicker';

const styles = { paddingTop: '20px' };
const CenterDecorator = (storyFn) => (
  <div className='container' style={styles} >
    { storyFn() }
  </div>
);

const DateTimePickerStory = () => (<DateTimePicker />)

storiesOf('In Progress', module)
  .addDecorator(CenterDecorator)
  .add('DateTimePicker', DateTimePickerStory);
