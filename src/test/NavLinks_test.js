import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import NavLink from '../NavLink';
import NavLinks from '../NavLinks';

describe('NavLinks', function() {
  const simpleNavLinks = [
    {
      type: 'navLink',
      text: 'Tommy Cambell',
      href: '#tm',
      preIcon: 'fa fa-user',
    },
    {
      type: 'navLink',
      text: 'Aubrey Cambell',
      href: '#au',
      preIcon: 'fa fa-user',
    },
  ];
  const navLinksWithSubNavLinks = [
    {
      type: 'navLink',
      text: 'Screener Summary',
      href: '#summary',
      className: '',
    },
    {
      type: 'navLinkWithInnerNav',
      text: 'People & Roles',
      href: '#ppl',
      navItems: [
        {
          type: 'navLink',
          text: 'Tommy Cambell',
          href: '#tom',
          preIcon: 'fa fa-user',
          postIcon: 'fa fa-exclamation-triangle c-red',
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
          href: '#chr',
          preIcon: 'fa fa-user',
        },
      ],
    },
  ];
  const renderer = ReactTestUtils.createRenderer();
  const clickHandler = function() {
    console.log('test msg');
  };

  describe('given empty navigation links', function() {
    const nullNavLinksComponent = renderer.render(<NavLinks navLinks={[]} />);
    it('renders No nav links', function() {
      expect(nullNavLinksComponent).toBe(null);
    });
  });

  describe('given simple navigation links', function() {
    const simpleNavLinksComponent = renderer.render(
      <NavLinks
        navLinks={simpleNavLinks}
        handleClick={clickHandler}
        activeNavLinkHref={simpleNavLinks[0].href}
        indentationLevel={0}
      />
    );
    const simpleNavLinksResultTag = renderer.getRenderOutput(
      simpleNavLinksComponent
    );
    it('simple Navigation Links are wrapped in ul tag', function() {
      expect(simpleNavLinksResultTag.type).toBe('ul');
      expect(simpleNavLinksResultTag.props.className).toBe('nav nav-stacked');
      expect(simpleNavLinksResultTag.props.children.length).toBe(2);
    });

    it('renders simple navigation links', function() {
      expect(simpleNavLinksResultTag.props.children).toEqual([
        <NavLink
          key={simpleNavLinks[0].text}
          text={simpleNavLinks[0].text}
          href={simpleNavLinks[0].href}
          preIcon={simpleNavLinks[0].preIcon}
          postIcon={simpleNavLinks[0].postIcon}
          handleClick={clickHandler}
          active={true}
          indentationLevel={0}
        >
          {null}
        </NavLink>,
        <NavLink
          key={simpleNavLinks[1].text}
          text={simpleNavLinks[1].text}
          href={simpleNavLinks[1].href}
          preIcon={simpleNavLinks[1].preIcon}
          postIcon={simpleNavLinks[1].postIcon}
          handleClick={clickHandler}
          active={false}
          indentationLevel={0}
        >
          {null}
        </NavLink>,
      ]);
    });
  });

  describe('given nested navigation links', function() {
    const navLinksWithSubNavLinksComponent = renderer.render(
      <NavLinks
        navLinks={navLinksWithSubNavLinks}
        handleClick={clickHandler}
        activeNavLinkHref={navLinksWithSubNavLinks[0].href}
        indentationLevel={0}
      />
    );
    const navLinksWithSubNavLinksResultTag = renderer.getRenderOutput(
      navLinksWithSubNavLinksComponent
    );

    it('renders nested navigation links', function() {
      expect(navLinksWithSubNavLinksResultTag.type).toBe('ul');
      expect(navLinksWithSubNavLinksResultTag.props.children.length).toBe(2);
      expect(navLinksWithSubNavLinksResultTag.props.children).toEqual([
        <NavLink
          key={navLinksWithSubNavLinks[0].text}
          text={navLinksWithSubNavLinks[0].text}
          href={navLinksWithSubNavLinks[0].href}
          preIcon={navLinksWithSubNavLinks[0].preIcon}
          postIcon={navLinksWithSubNavLinks[0].postIcon}
          handleClick={clickHandler}
          active={true}
          indentationLevel={0}
        >
          {null}
        </NavLink>,
        <NavLink
          key={navLinksWithSubNavLinks[1].text}
          text={navLinksWithSubNavLinks[1].text}
          href={navLinksWithSubNavLinks[1].href}
          preIcon={navLinksWithSubNavLinks[1].preIcon}
          postIcon={navLinksWithSubNavLinks[1].postIcon}
          handleClick={clickHandler}
          active={false}
          indentationLevel={0}
        >
          <NavLinks
            navLinks={navLinksWithSubNavLinks[1].navItems}
            handleClick={clickHandler}
            activeNavLinkHref={navLinksWithSubNavLinks[0].href}
            indentationLevel={1}
          />
        </NavLink>,
      ]);
    });
  });
});
