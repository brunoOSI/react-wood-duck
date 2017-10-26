import React from 'react';

import { storiesOf } from '@storybook/react';

import MultiSelect from '../../src/MultiSelect';

const styles = { paddingTop: '20px' };
const CenterDecorator = storyFn => (
  <div className="container" style={styles}>
    {storyFn()}
  </div>
);

const MultiSelectStory = () => <MultiSelect />;

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('MultiSelect', MultiSelectStory);
