import React from 'react';
import DatePicker from '../DatePicker.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('DatePicker', function() {
  const renderedComponent = TestUtils.createRenderer();
  renderedComponent.render(<DatePicker />);
  const resultTag = renderedComponent.getRenderOutput();

  it('renders the tag', function() {
    expect(resultTag.type).toBe('div');
  });

  it('verify the className', function() {
    expect(resultTag.props.className).toBe('form-group');
  });
});
