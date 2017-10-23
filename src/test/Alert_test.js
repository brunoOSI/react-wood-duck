import React from 'react';
import Alert from '../Alert.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Alert', function() {
  const renderedComponent = TestUtils.createRenderer();
  renderedComponent.render(<Alert />);
  const resultTag = renderedComponent.getRenderOutput();

  it('renders the tag', function() {
    expect(resultTag.type).toBe('div');
  });

  it('verify the className', function() {
    expect(resultTag.props.className).toBe('row');
  });
});
