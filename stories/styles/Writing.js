import React from 'react';
import { storiesOf } from '@storybook/react';

const CenterDecorator = storyFn => (
  <div className="container-fluid">{storyFn()}</div>
);
const WritingStory = () => (
  <div>
    <h1>Writing</h1>
    <hr />
    <p>Coming Soon !</p>
  </div>
);

storiesOf('Styles', module)
  .addDecorator(CenterDecorator)
  .add('Writing', WritingStory);
