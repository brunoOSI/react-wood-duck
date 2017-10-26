import React from 'react';

import { storiesOf } from '@storybook/react';

import TextArea from '../../src/TextArea';

const CenterDecorator = storyFn => <div className="container">{storyFn()}</div>;

const TextAreaStory = () => (
  <TextArea
    label="Example"
    name="Text Area"
    handleOnChange={e => this.setSate({ value: e.target.value })}
    rows={5}
    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    value=""
  />
);

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('TextArea', TextAreaStory);
