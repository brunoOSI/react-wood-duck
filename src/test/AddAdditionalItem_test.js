import React from 'react';
import AddAdditionalItem from '../AddAdditionalItem.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('AddAdditionalItem', function() {
  const renderedComp = TestUtils.createRenderer();
  renderedComp.render(<AddAdditionalItem />);
  const resultTag = renderedComp.getRenderOutput();

  it('renders the tag', function() {
    expect(resultTag.type).toBe('div');
  });

  it('verify the className', function() {
    expect(resultTag.props.className).toBe('list-item');
  });
});
