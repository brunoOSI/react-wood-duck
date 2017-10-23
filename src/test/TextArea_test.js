import React from 'react';
import TextArea from '../TextArea.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

let props = { label: 'hi', rows: 2, name: 'Text' };

describe('TextArea', function() {
  const renderedComponent = TestUtils.createRenderer();
  renderedComponent.render(<TextArea {...props} />);
  const resultTag = renderedComponent.getRenderOutput();

  it('renders the tag', function() {
    expect(resultTag.type).toBe('div');
  });

  it('verify the className', function() {
    expect(resultTag.props.className).toBe('form-group');
  });
});
