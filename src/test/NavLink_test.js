import React from 'react';
import NavLink from '../NavLink.js';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

describe('NavLink', function() {
  // var ReactTestUtils = React.addons.TestUtils
  const navLinkHref = 'test.html';
  const navLinkText = 'Nav Link Test';
  const navLinkClass = 'navlink';
  const preIconClass = 'fa fa-user';
  const postIconClass = 'fa icon-warning-sign';
  const indentationLevel = 2;

  const activeNavLinkClassName = 'active-navlink';
  const inactiveNavLinkClassName = 'inactive-navlink';
  var inactiveBasicNavLink = ReactTestUtils.renderIntoDocument(
    <NavLink
      href={navLinkHref}
      text={navLinkText}
      indentationLevel={indentationLevel}
      active={false}
      onClick={function() {
        console.log('test function');
      }}
    />
  );
  var navLinkWithPreIcon = ReactTestUtils.renderIntoDocument(
    <NavLink href={navLinkHref} text={navLinkText} preIcon={preIconClass} />
  );
  var activeNavLinkWithPreIcon = ReactTestUtils.renderIntoDocument(
    <NavLink
      href={navLinkHref}
      text={navLinkText}
      preIcon={preIconClass}
      active={true}
    />
  );
  var navLinkWithPostIcon = ReactTestUtils.renderIntoDocument(
    <NavLink href={navLinkHref} text={navLinkText} postIcon={postIconClass} />
  );
  const navLinkWithPrePostIcons = ReactTestUtils.renderIntoDocument(
    <NavLink
      href={navLinkHref}
      text={navLinkText}
      preIcon={preIconClass}
      postIcon={postIconClass}
    />
  );
  const navLinkWithChildren = ReactTestUtils.renderIntoDocument(
    <NavLink href={navLinkHref} text={navLinkText}>
      <div>Test Child</div>
    </NavLink>
  );
  it('verify basic navlink has li element', function() {
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

  it('verity basic navlink has anchor element', function() {
    const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
      inactiveBasicNavLink,
      'li'
    );
    const anchorElement = liElement.children[1];
    expect(anchorElement.tagName).toBe('a'.toUpperCase());
    expect(anchorElement.textContent).toBe(navLinkText);
    expect(anchorElement.href).toContain(navLinkHref);
    expect(anchorElement.className).toBe('');
    expect(anchorElement.onClick).not.toBe(null);
  });

  it('verify basic navlink has span element with inactive class name and valid indentation style', function() {
    const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
      inactiveBasicNavLink,
      'li'
    );
    const spanElement = ReactTestUtils.findRenderedDOMComponentWithTag(
      inactiveBasicNavLink,
      'span'
    );
    expect(spanElement).not.toBe(null);
    expect(spanElement.className).toBe(inactiveNavLinkClassName);
    expect(spanElement.style.cssText).toBe('margin-right: 6rem;');
  });

  it('verify navlink element with pre icon', function() {
    expect(
      ReactTestUtils.isCompositeComponent(navLinkWithPreIcon, NavLink)
    ).toBe(true);
    const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
      navLinkWithPreIcon,
      'li'
    );
    expect(liElement.children.length).toBe(3);
    const preIconElement = liElement.children[1];
    expect(preIconElement.tagName).toBe('i'.toUpperCase());
    expect(preIconElement.className).toBe(preIconClass);
    expect(liElement.children[0].tagName).toBe('span'.toUpperCase());
    expect(liElement.children[2].tagName).toBe('a'.toUpperCase());
  });

  it('verify navlink element with post icon', function() {
    expect(
      ReactTestUtils.isCompositeComponent(navLinkWithPostIcon, NavLink)
    ).toBe(true);
    const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
      navLinkWithPostIcon,
      'li'
    );
    expect(liElement.children.length).toBe(3);
    expect(liElement.children[0].tagName).toBe('span'.toUpperCase());
    expect(liElement.children[1].tagName).toBe('a'.toUpperCase());
    const postIconElement = liElement.children[2];
    expect(postIconElement.className).toContain(postIconClass);
  });

  it('verify navlink renders with pre & post icons', function() {
    expect(
      ReactTestUtils.isCompositeComponent(navLinkWithPrePostIcons, NavLink)
    ).toBe(true);
    const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
      navLinkWithPrePostIcons,
      'li'
    );
    expect(liElement.children.length).toBe(4);
    expect(liElement.children[0].tagName).toBe('span'.toUpperCase());
    const preIconElement = liElement.children[1];
    expect(preIconElement.tagName).toBe('i'.toUpperCase());
    expect(preIconElement.className).toBe(preIconClass);
    expect(liElement.children[2].tagName).toBe('a'.toUpperCase());
    const postIconElement = liElement.children[3];
    expect(postIconElement.tagName).toBe('i'.toUpperCase());
    expect(postIconElement.className).toContain(postIconClass);
  });

  it('verify navlink redners child components', function() {
    const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
      navLinkWithChildren,
      'li'
    );
    expect(liElement.children.length).toBe(3);
    expect(liElement.children[0].tagName).toBe('span'.toUpperCase());
    expect(liElement.children[1].tagName).toBe('a'.toUpperCase());
    expect(liElement.children[2].tagName).toBe('div'.toUpperCase());
  });

  it('verify navlink renders with pre Icon & active style class', function() {
    const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(
      activeNavLinkWithPreIcon,
      'li'
    );
    expect(liElement.children.length).toBe(3);
    expect(liElement.children[0].tagName).toBe('span'.toUpperCase());
    expect(liElement.children[0].className).toBe(activeNavLinkClassName);
    expect(liElement.children[1].tagName).toBe('i'.toUpperCase());
    expect(liElement.children[2].tagName).toBe('a'.toUpperCase());
  });
});
