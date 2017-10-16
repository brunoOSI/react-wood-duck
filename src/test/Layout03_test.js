import React from 'react';
import Layout03 from '../Layout03.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Layout03', function() {

    const renderedComp = TestUtils.createRenderer()
    const compRendered = renderedComp.render(<Layout03/>);
    const resultTag = renderedComp.getRenderOutput()
    const page = TestUtils.renderIntoDocument(<Layout03/>);

    it('renders the tag', function() {
      expect(resultTag.type).toBe('div')
      it('find components', function(){
      let globalheader = TestUtils.scryRenderedDOMComponentsWithTag(page,'div');
      expect(globalheader.length).toEqual(1);
      let pageheader = TestUtils.scryRenderedDOMComponentsWithTag(page,'div');
      expect(pageheader.length).toEqual(1);
      let sidenav = TestUtils.scryRenderedDOMComponentsWithTag(page, 'div');
      expect(sidenav.length).toEqual(1);
      });
      it('renders the tag', function() {
      expect(resultTag.props.type).toBe('div')
      });
    });
});

