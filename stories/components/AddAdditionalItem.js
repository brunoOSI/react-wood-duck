import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import InputComponent from '../../src/InputComponent';
import ListItem from '../../src/AddAdditionalItem';

const CenterDecorator = storyFn => <div className="container">{storyFn()}</div>;
const inputName = (
  <InputComponent
    label="Name"
    type="text"
    gridClassName="col-md-6 col-sm-6 col-xs-12"
  />
);
const inputPhone = (
  <InputComponent
    label="Phone Number"
    type="number"
    gridClassName="col-md-6 col-sm-6 col-xs-12"
  />
);
const clearfix = <div className="clearfix" />;

const ListItemStory = withInfo(
  `
    #### Usage

      - Use when the subset of a form might need to be
      added multiple times.

    #### Accessibility

      - Make sure that the remove link has an arial-label
      attribute describing what is being removed, example:
      arial-label="Remove phone number"

      - Focus should go to the remove link last in any form
      subset.

      - After creating a new item, focus should go to the
      first field of this item.
  `
)(() => (
  <div>
    <ListItem>
      <InputComponent
        label="Name"
        type="text"
        gridClassName="col-md-6 col-sm-6 col-xs-12"
      />
      <InputComponent
        label="Phone Number"
        type="number"
        gridClassName="col-md-6 col-sm-6 col-xs-12"
      />
      <div className="clearfix" />
    </ListItem>
  </div>
));

storiesOf('In Progress', module)
  .addDecorator(CenterDecorator)
  .add('AddAdditionalItem', ListItemStory);
