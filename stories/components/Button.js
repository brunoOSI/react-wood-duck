import React from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from '../../src/Button';

const styles = { padding: '1.5rem' };

const CenterDecorator = storyFn => <div className="container">{storyFn()}</div>;
const ButtonContainer = ({ children }) => <div style={styles}>{children}</div>;
ButtonContainer.propTypes = { children: PropTypes.node };

const ButtonStory = withInfo(
  ` 
    #### Buttons Variations
      - Primary Button 

      - Secondary

      - Warning

    #### Primary
    ---
    ##### Usage
      - Use when the user needs to submit a form or make the completion
      of a task (Save or Done).

      - Use to indicate the next step in a multi-step process
      (Next, Continue).

      - Use to initiate a new task (Create New Screening).

      - Do not use two primary buttons next to each other or on the
      same page – a secondary button should be considered.

    #### Secondary
    ---
    ##### Usage
      - Use when there is an action accompanying the primary call-to-action.

      - Use if you want to de-emphasize an action.

    #### Warning
    ---
    ##### Usage
      - Use when the primary action is negative in nature (Delete People,
        Merge People).

      - Use when you need to communicate the severity (or potential risk)
      of an action.

      - Use when there is an action accompanying the primary call-to-action.

      - Do not use if the action is positive or moves the user forward.

    ##### Accessibility

      - Buttons should display a visible focus state when users tab to them.

      - Avoid using <div> or <img> tags to create buttons. Screen readers
      don't automatically know either is a usable button.

      - When styling links to look like buttons, remember that scrreen readers handle
      links slightly differently than they do buttons. Pressing the Space
      key triggers a button, but pressing the Enter key triggers a link.

      - if the <a> elements are used to act as buttons – triggeing in-page
      functionality, rather than navigating to another document or section
      within the current page – they should also be given an appropriate
      role='button'.
  `
)(() => (
  <ButtonContainer>
    <div className="row" style={styles}>
      <div className="col-lg-6 text-center">
        <Button btnClassName="primary" btnName="Primary" />
      </div>
      <div className="col-lg-6 text-center">
        <Button btnClassName="primary" btnName="Primary" disabled={true} />
      </div>
    </div>
    <div className="row" style={styles}>
      <div className="col-lg-6 text-center">
        <Button btnClassName="default" btnName="Secondary" />
      </div>
      <div className="col-lg-6 text-center">
        <Button btnClassName="default" btnName="Secondary" disabled={true} />
      </div>
    </div>
    <div className="row" style={styles}>
      <div className="col-lg-6 text-center">
        <Button btnClassName="warning" btnName="Warning" />
      </div>
      <div className="col-lg-6 text-center">
        <Button btnClassName="warning" btnName="Warning" disabled={true} />
      </div>
    </div>
  </ButtonContainer>
));

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('Button', ButtonStory);
