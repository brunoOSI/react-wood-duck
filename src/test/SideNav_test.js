import React from 'react';
import TestUtils from 'react-dom/lib/ReactTestUtils';
import SideNav from '../SideNav';
import NavLinksContainer from '../NavLinksContainer';

describe('Side Nav', function() {
  const simpleNavLinks = [
    {
      type: 'navLinks',
      navItems: [
        {
          type: 'navLink',
          text: 'Tommy Cambell',
          href: '#',
          preIcon: 'fa fa-user',
        },
        {
          type: 'navLink',
          text: 'Aubrey Cambell',
          href: '#',
          preIcon: 'fa fa-user',
        },
        {
          type: 'navLink',
          text: 'Chris Cambell',
          href: '#',
          preIcon: 'fa fa-user',
        },
      ],
    },
  ];
  const renderer = TestUtils.createRenderer();
  let sideNavWithnavigationLinksresultTag = null;

  beforeEach(function() {
    renderer.render(<SideNav content={simpleNavLinks} />);
    sideNavWithnavigationLinksresultTag = renderer.getRenderOutput();
  });

  it('returns side nav element given valid content', function() {
    expect(sideNavWithnavigationLinksresultTag.type).toBe('div');
    expect(sideNavWithnavigationLinksresultTag.props.className).toBe(
      'container hidden-xs col-md-3 side-nav'
    );
    expect(sideNavWithnavigationLinksresultTag.props['aria-label']).toBe(
      'Side Nav'
    );
  });

  it('returns side nav element with a bunch of navigation links given content with navigation links details', function() {
    expect(sideNavWithnavigationLinksresultTag.props.children.length).toBe(1);
    expect(sideNavWithnavigationLinksresultTag.props.children[0].type).toBe(
      'div'
    );
    expect(
      sideNavWithnavigationLinksresultTag.props.children[0].props.className
    ).toBe('row');
    expect(sideNavWithnavigationLinksresultTag.props.children[0]).toEqual(
      <div
        className="row"
        key={0}
        role="navigation"
        aria-label="Main Content Navigation Menu"
      >
        <NavLinksContainer navLinks={simpleNavLinks[0].navItems} />
      </div>
    );
  });

  it('returns navigation links with proper accessibility tags given content with navigation links details', function() {
    expect(
      sideNavWithnavigationLinksresultTag.props.children[0].props['aria-label']
    ).toBe('Main Content Navigation Menu');
    expect(
      sideNavWithnavigationLinksresultTag.props.children[0].props.role
    ).toBe('navigation');
  });

  it('returns side nav element with default column width when columnWidth is not provided', function() {
    renderer.render(<SideNav content={simpleNavLinks} />);
    const resultTag = renderer.getRenderOutput();
    expect(resultTag.props.className).toContain('col-md-3');
  });

  it('returns side nav element with specified column width', function() {
    renderer.render(<SideNav content={simpleNavLinks} columnWidth={4} />);
    const resultTag = renderer.getRenderOutput();
    expect(resultTag.props.className).toContain('col-md-4');
  });
});
