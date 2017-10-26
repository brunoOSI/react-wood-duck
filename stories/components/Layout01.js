import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout01 from '../../src/Layout01';

const Layout01Story = () => <Layout01 />;

storiesOf('Components', module).add('Layout01', Layout01Story);
