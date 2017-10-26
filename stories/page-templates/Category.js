import React from 'react';
import { storiesOf } from '@storybook/react';

const CenterDecorator = storyFn => (
  <div className="container-fluid">{storyFn()}</div>
);
const CategoryStory = () => (
  <div>
    <h1>Category</h1>
    <hr />
    <p>Coming Soon !</p>
  </div>
);

storiesOf('Page Templates', module)
  .addDecorator(CenterDecorator)
  .add('Category', CategoryStory);
