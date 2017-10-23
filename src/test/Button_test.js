import React from 'react';
import Button from '../Button.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Button', function() {
  const renderedComponent = TestUtils.createRenderer();
  renderedComponent.render(<Button />);
  const resultTag = renderedComponent.getRenderOutput();

  it('renders the tag', function() {
    expect(resultTag.type).toBe('div');
  });

  it('verify the className', function() {
    expect(resultTag.props.className).toBe('row');
  });
});
