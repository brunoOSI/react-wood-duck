import React from 'react';
import InputComponent from '../InputComponent.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('InputComponent', function() {
  const renderedComponent = TestUtils.createRenderer();
  renderedComponent.render(<InputComponent />);
  const resultTag = renderedComponent.getRenderOutput();

  it('renders the tag', function() {
    expect(resultTag.type).toBe('div');
  });

  it('verify the className', function() {
    expect(resultTag.props.className).toBe('form-group');
  });
});
