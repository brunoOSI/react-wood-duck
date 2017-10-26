import React from 'react';
import { storiesOf } from '@storybook/react';

const CenterDecorator = storyFn => (
  <div className="container-fluid">{storyFn()}</div>
);
const ResponsiveDesignStory = () => (
  <div>
    <h1>Responsive Design</h1>
    <hr />
    <p>Coming Soon !</p>
  </div>
);

storiesOf('Layout', module)
  .addDecorator(CenterDecorator)
  .add('Responsive Design', ResponsiveDesignStory);
