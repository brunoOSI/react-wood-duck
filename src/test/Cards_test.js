import React from 'react';
import Cards from '../Cards.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Cards', function() {
  const renderedComponent = TestUtils.createRenderer();
  renderedComponent.render(<Cards />);
  const resultTag = renderedComponent.getRenderOutput();

  it('renders the tag', function() {
    expect(resultTag.type).toBe('div');
  });

  it('verify the className', function() {
    expect(resultTag.props.className).toBe('bg-lightest-grey container');
  });
});
