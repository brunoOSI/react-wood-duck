import React from 'react';

import { storiesOf } from '@storybook/react';

import PageHeader from '../../src/PageHeader';

const PageHeaderStory = () => <PageHeader />;

storiesOf('Components/PageHeader', module).add('PageHeader', PageHeaderStory);
