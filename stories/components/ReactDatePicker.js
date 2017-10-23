import React from 'react';

import { storiesOf } from '@storybook/react';

import ReactDatePicker from '../../src/ReactDatePicker';

const styles = { paddingTop: '20px' };
const CenterDecorator = storyFn => (
  <div className="container" style={styles}>
    {storyFn()}
  </div>
);
const ReactDatePickerStory = () => <ReactDatePicker />;

storiesOf('In Progress', module)
  .addDecorator(CenterDecorator)
  .add('ReactDatePicker', ReactDatePickerStory);
