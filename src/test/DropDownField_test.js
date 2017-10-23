import React from 'react';
import DropDownField from '../DropDownField.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

let props = { name: 'hi', options: [] };

describe('DropDownField', function() {
  const renderedComponent = TestUtils.createRenderer();
  renderedComponent.render(<DropDownField {...props} />);
  const resultTag = renderedComponent.getRenderOutput();

  it('renders the tag', function() {
    expect(resultTag.type).toBe('div');
  });

  it('verify the className', function() {
    expect(resultTag.props.className).toBe('form-group');
  });
});
