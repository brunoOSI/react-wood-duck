import React from 'react';
import TestUtils from 'react-dom/lib/ReactTestUtils';
import NavLinksContainer from '../NavLinksContainer';
import NavLinks from '../NavLinks';

describe('NavLinksContainer', function() {
  describe('given empty navigation links', function() {
    const emptyNavLinks = [];
    let renderer = TestUtils.createRenderer();
    renderer.render(<NavLinksContainer navLinks={emptyNavLinks} />);
    const resultTag = renderer.getRenderOutput();

    it('renders NavLinks Component', function() {
      expect(resultTag.type).toBe(NavLinks);
    });

    it('renders NavLinks component with empty navLinks property', function() {
      expect(resultTag.props.navLinks).toEqual(emptyNavLinks);
    });

    it('renders NavLinks component with null activeNavLinkHref', function() {
      expect(resultTag.props.activeNavLinkHref).toBe(null);
    });
  });

  describe('given navigation links', function() {
    let renderer = TestUtils.createRenderer();
    const simpleNavLinks = [
      {
        type: 'navLink',
        text: 'Tommy Cambell',
        href: '#tommy',
        preIcon: 'fa fa-user',
      },
      {
        type: 'navLink',
        text: 'Aubrey Cambell',
        href: '#aub',
        preIcon: 'fa fa-user',
      },
      {
        type: 'navLink',
        text: 'Chris Cambell',
        href: '#chris',
        preIcon: 'fa fa-user',
      },
    ];
    renderer.render(<NavLinksContainer navLinks={simpleNavLinks} />);
    const resultTag = renderer.getRenderOutput();

    it('renders NavLinks component with give navLinks property', function() {
      expect(resultTag.type).toBe(NavLinks);
      expect(resultTag.props.navLinks).toEqual(simpleNavLinks);
    });

    it('renders NavLinks component with first NavLink as active NavLink', function() {
      expect(resultTag.props.activeNavLinkHref).toBe(simpleNavLinks[0].href);
    });

    it('renders NavLinks component with a nav link click handler', function() {
      expect(resultTag.props.handleClick).toBeTruthy();
    });
  });
});
