import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Alert from '../../src/Alert';

const CenterDecorator = (storyFn) => (
  <div className='container'>
    { storyFn() }
  </div>
);

const alert = withInfo(
  `
    #### Alerts Variations
      - Info Alert 

      - Error Alert

    #### Usage
    The info alert should be used to provide information 
    about a card to a user.The error alert should be 
    used to point out a card level issue that would 
    violate a business rule.

    ##### Accessibility

    The error alert should have the appropriate role="alert" attribute.
  `
)(() => (
  <div>
    <Alert
      alertClassName="info"
      alertMessage="Info Message! Well done guys"
      faIcon="fa-check-circle"
    />

    <Alert
      alertClassName="error"
      alertMessage="Error! This is an error message."
      faIcon="fa-exclamation-triangle"
    />
  </div>
));

storiesOf('In Progress', module)
  .addDecorator(CenterDecorator)
  .add('Alert', alert);