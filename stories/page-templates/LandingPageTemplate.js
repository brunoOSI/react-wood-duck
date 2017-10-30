import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout01 from '../../src/Layout01';

const LandingPage = () => <Layout01 />;

storiesOf('Page Templates', module).add(
  '01 Landing Page Template',
  LandingPage
);
