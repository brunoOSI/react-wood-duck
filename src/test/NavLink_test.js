import React from 'react';
import NavLink from '../NavLink.js';
import ReactTestUtils from 'react-dom/test-utils';

describe('NavLink', function() {
  const navLinkHref = 'test.html';
  const navLinkText = 'Nav Link Test';
  const navLinkClass = 'navlink';
  const preIconClass = 'fa fa-user';
  const postIconClass = 'fa icon-warning-sign';
  const indentationLevel = 2;

  const activeNavLinkClassName = 'active-navlink';
  const inactiveNavLinkClassName = 'inactive-navlink';

  describe('basic navlink', function() {
    let inactiveBasicNavLink = ReactTestUtils.renderIntoDocument(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        indentationLevel={indentationLevel}
        active={false}
        onClick={function() {}}
      />
    );

    it('has li element', function() {
      expect(inactiveBasicNavLink).not.toBe(null);
      expect(
        ReactTestUtils.isCompositeComponent(inactiveBasicNavLink, NavLink)
      ).toBe(true);
      const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
        inactiveBasicNavLink,
        'li'
      );
      expect(liElement).not.toBe(null);
      expect(liElement.className).toBe(navLinkClass);
      expect(liElement.children.length).toBe(2);
    });

    it('has anchor element', function() {
      const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
        inactiveBasicNavLink,
        'li'
      );
      const anchorElement = liElement.children[1];
      expect(anchorElement.tagName).toBe('A');
      expect(anchorElement.textContent).toBe(navLinkText);
      expect(anchorElement.href).toContain(navLinkHref);
      expect(anchorElement.className).toBe('');
      expect(anchorElement.onClick).not.toBe(null);
    });

    it('has span element with inactive class name and valid indentation style', function() {
      const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
        inactiveBasicNavLink,
        'li'
      );
      const spanElement = liElement.children[0];
      expect(spanElement.tagName).toBe('SPAN');
      expect(spanElement.className).toBe(inactiveNavLinkClassName);
      expect(spanElement.style.cssText).toBe('margin-right: 6rem;');
    });

    it('does not have pre & post icon elements', function() {
      const iElements = ReactTestUtils.scryRenderedDOMComponentsWithTag(
        inactiveBasicNavLink,
        'i'
      );
      expect(iElements.length).toBe(0);
    });
  });

  describe('navlink with pre icon property', function() {
    const navLinkWithPreIcon = ReactTestUtils.renderIntoDocument(
      <NavLink href={navLinkHref} text={navLinkText} preIcon={preIconClass} />
    );
    const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
      navLinkWithPreIcon,
      'li'
    );

    it('has basic element', function() {
      expect(
        ReactTestUtils.isCompositeComponent(navLinkWithPreIcon, NavLink)
      ).toBe(true);
      expect(liElement.children.length).toBe(3);
      expect(liElement.children[0].tagName).toBe('SPAN');
      expect(liElement.children[2].tagName).toBe('A');
    });

    it('navlink has pre icon', function() {
      expect(
        ReactTestUtils.isCompositeComponent(navLinkWithPreIcon, NavLink)
      ).toBe(true);
      expect(liElement.children.length).toBe(3);
      const preIconElement = liElement.children[1];
      expect(preIconElement.tagName).toBe('I');
      expect(preIconElement.className).toBe(preIconClass);
    });
  });

  describe('navlink with post icon property', function() {
    const navLinkWithPostIcon = ReactTestUtils.renderIntoDocument(
      <NavLink href={navLinkHref} text={navLinkText} postIcon={postIconClass} />
    );
    const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
      navLinkWithPostIcon,
      'li'
    );

    it('has basic elements', function() {
      expect(
        ReactTestUtils.isCompositeComponent(navLinkWithPostIcon, NavLink)
      ).toBe(true);
      expect(liElement.children.length).toBe(3);
      expect(liElement.children[0].tagName).toBe('SPAN');
      expect(liElement.children[1].tagName).toBe('A');
    });

    it('has post icon', function() {
      const postIconElement = liElement.children[2];
      expect(postIconElement.className).toContain(postIconClass);
    });
  });

  describe('navlink with pre & post icons', function() {
    const navLinkWithPrePostIcons = ReactTestUtils.renderIntoDocument(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        preIcon={preIconClass}
        postIcon={postIconClass}
      />
    );
    const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
      navLinkWithPrePostIcons,
      'li'
    );

    it('has basic elements', function() {
      expect(liElement.children[0].tagName).toBe('SPAN');
      expect(liElement.children[2].tagName).toBe('A');
    });

    it('has pre & post icons', function() {
      expect(
        ReactTestUtils.isCompositeComponent(navLinkWithPrePostIcons, NavLink)
      ).toBe(true);
      expect(liElement.children.length).toBe(4);
      expect(liElement.children[1].tagName).toBe('I');
      expect(liElement.children[1].className).toBe(preIconClass);
      expect(liElement.children[3].tagName).toBe('I');
      expect(liElement.children[3].className).toContain(postIconClass);
    });
  });

  describe('navlink with child components', function() {
    const navLinkWithChildren = ReactTestUtils.renderIntoDocument(
      <NavLink href={navLinkHref} text={navLinkText}>
        <div>Test Child</div>
      </NavLink>
    );
    const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
      navLinkWithChildren,
      'li'
    );

    it('has basic elements', function() {
      expect(liElement.children.length).toBe(3);
      expect(liElement.children[0].tagName).toBe('SPAN');
      expect(liElement.children[1].tagName).toBe('A');
    });

    it('has given child components', function() {
      expect(liElement.children[2].tagName).toBe('DIV');
    });
  });

  describe('navlink with preIcon & active properties', function() {
    const activeNavLinkWithPreIcon = ReactTestUtils.renderIntoDocument(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        preIcon={preIconClass}
        active={true}
      />
    );

    it('has basic elements with active style', function() {
      expect(
        ReactTestUtils.findRenderedDOMComponentWithClass(
          activeNavLinkWithPreIcon,
          activeNavLinkClassName
        )
      ).toBeTruthy();
    });
  });
});
