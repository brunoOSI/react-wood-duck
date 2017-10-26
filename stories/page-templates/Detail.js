import React from 'react';
import { storiesOf } from '@storybook/react';

const CenterDecorator = storyFn => (
  <div className="container-fluid">{storyFn()}</div>
);
const DetailStory = () => (
  <div>
    <h1>Detail</h1>
    <hr />
    <p>Coming Soon !</p>
  </div>
);

storiesOf('Page Templates', module)
  .addDecorator(CenterDecorator)
  .add('Detail', DetailStory);
