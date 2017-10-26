import React from 'react';

import { storiesOf } from '@storybook/react';

import DateTimePicker from '../../src/DateTimePicker';

const styles = { paddingTop: '20px' };
const CenterDecorator = storyFn => (
  <div className="container" style={styles}>
    {storyFn()}
  </div>
);

const DateTimePickerStory = () => <DateTimePicker />;

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('DateTimePicker', DateTimePickerStory);
