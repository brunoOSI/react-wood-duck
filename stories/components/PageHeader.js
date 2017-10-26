import React from 'react';

import { storiesOf } from '@storybook/react';

import PageHeader from '../../src/PageHeader';

const PageHeaderStory = () => <PageHeader />;

storiesOf('Components', module).add('PageHeader', PageHeaderStory);
