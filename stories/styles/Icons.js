import React from 'react';
import { storiesOf } from '@storybook/react';

const CenterDecorator = storyFn => (
  <div className="container-fluid">{storyFn()}</div>
);

const IconsStory = () => (
  <div>
    <h1>Icons</h1>
    <p>
      Regarding icons: For now just note that we are currently using FontAwesome
      icon set:
    </p>
    <a href="http://fontawesome.io/">FontAwesome</a>
  </div>
);

storiesOf('Styles', module)
  .addDecorator(CenterDecorator)
  .add('Icons', IconsStory);
