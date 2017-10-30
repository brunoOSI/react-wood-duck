import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout03 from '../../src/Layout03';

const DetailPage = () => <Layout03 />;

storiesOf('Page Templates', module).add('03 Detail Page Template', DetailPage);
