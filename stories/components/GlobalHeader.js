import React from 'react';

import { storiesOf } from '@storybook/react';

import GlobalHeader from '../../src/GlobalHeader';

const GlobalHeaderStory = () => <GlobalHeader />;

storiesOf('Components', module).add('GlobalHeader', GlobalHeaderStory);
