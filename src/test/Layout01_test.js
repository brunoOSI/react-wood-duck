import React from 'react';
import Layout01 from '../Layout01.js';
import GlobalHeader from '../GlobalHeader.js';
import PageHeader from '../PageHeader.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Layout01', function() {
  it('renders the tag', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Layout01 />);
    expect(renderer.getRenderOutput().type).toBe('div');
  });

  it('find if it contains GlobalHeader and PageHeader', function() {
    const layout = TestUtils.renderIntoDocument(<Layout01 />);
    const globalHeaderComponent = TestUtils.scryRenderedComponentsWithType(
      layout,
      GlobalHeader
    );
    expect(globalHeaderComponent.length).toEqual(1);
    const pageHeader = TestUtils.scryRenderedComponentsWithType(
      layout,
      PageHeader
    );
    expect(pageHeader.length).toEqual(1);
  });
});
