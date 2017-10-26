import React from 'react';
import { storiesOf } from '@storybook/react';

const CenterDecorator = storyFn => (
  <div className="container-fluid">{storyFn()}</div>
);
const LandingStory = () => (
  <div>
    <h1>Landing/Work Overview</h1>
    <hr />
    <p>Coming Soon !</p>
  </div>
);

storiesOf('Page Templates', module)
  .addDecorator(CenterDecorator)
  .add('Landing/Work Overview', LandingStory);
