import React from 'react';
import Layout03 from '../Layout03.js';
import SideNav from '../SideNav.js';
import GlobalHeader from '../GlobalHeader.js';
import PageHeader from '../PageHeader.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Layout03', function() {
  it('renders the tag', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Layout03 />);
    const resultTag = renderer.getRenderOutput();
    expect(resultTag.type).toBe('div');
  });

  it('includes Global Header, Page Header and Side Nav components', function() {
    const layout = TestUtils.renderIntoDocument(<Layout03 />);
    expect(
      TestUtils.findRenderedComponentWithType(layout, GlobalHeader)
    ).toBeTruthy();
    expect(
      TestUtils.findRenderedComponentWithType(layout, PageHeader)
    ).toBeTruthy();
    expect(
      TestUtils.findRenderedComponentWithType(layout, SideNav)
    ).toBeTruthy();
  });
});
