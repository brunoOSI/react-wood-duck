import React from 'react';
import Table from '../Table.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Table', function() {
  const renderedComponent = TestUtils.createRenderer();
  renderedComponent.render(<Table />);
  const resultTag = renderedComponent.getRenderOutput();

  it('renders the tag', function() {
    expect(resultTag.type).toBe('table');
  });

  it('verify the className', function() {
    expect(resultTag.props.className).toBe('table table-hover table-striped');
  });
});
