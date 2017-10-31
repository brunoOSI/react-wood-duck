import React from 'react';
import { storiesOf } from '@storybook/react';

const CenterDecorator = storyFn => (
  <div className="container-fluid">{storyFn()}</div>
);
const GridStory = () => (
  <div>
    <h1>Grid</h1>
    <p>
      We are currently using Bootstrap grid system, which is based on a 12
      column layout and is fully responsive.
      <a href="https://v4-alpha.getbootstrap.com/layout/grid/"> Bootstrap </a>
    </p>
  </div>
);

storiesOf('Layout', module)
  .addDecorator(CenterDecorator)
  .add('Grid', GridStory);
