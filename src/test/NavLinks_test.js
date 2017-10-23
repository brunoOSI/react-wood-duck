import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import NavLink from '../NavLink'
import NavLinks from '../NavLinks'

describe('NavLinks', function() {

   const simpleNavLinks = { type: "navLinks", navItems: [
                                {type: "navLink", text: "Tommy Cambell", href: "#tm", preIcon: "fa fa-user"},
                                {type: "navLink", text: "Aubrey Cambell", href:"#au", preIcon: "fa fa-user"},
                             ]
                          };
   const navLinksWithSubNavLinks = {type: "navLinks", navItems: [
                                    {type: "navLink", text: "Screener Summary", href: "#summary", className: ""},
                                    {
                                       type: "navLinkWithInnerNav", text: "People & Roles", href:"#ppl", navItems: [
                                          {type: "navLink", text: "Tommy Cambell", href: "#tom", preIcon: "fa fa-user", postIcon: "fa fa-exclamation-triangle c-red"},
                                          {type: "navLink", text: "Aubrey Cambell", href:"#aub", preIcon: "fa fa-user"},
                                          {type: "navLink", text: "Chris Cambell", href: "#chr", preIcon: "fa fa-user"},
                                       ]
                                    }
                               ]};
   const renderer = ReactTestUtils.createRenderer()
   const nullNavLinksComponent = renderer.render(<NavLinks navLinks='' />)
   var clickHandler = function() {console.log('test msg');}
   const simpleNavLinksComponent = renderer.render(<NavLinks navLinks={simpleNavLinks} handleClick={clickHandler} activeNavLinkHref={simpleNavLinks.navItems[0].href} indentationLevel={0}/>)
   const simpleNavLinksResultTag = renderer.getRenderOutput(simpleNavLinksComponent)
   const navLinksWithSubNavLinksComponent = renderer.render(<NavLinks navLinks={navLinksWithSubNavLinks} handleClick={clickHandler} activeNavLinkHref={navLinksWithSubNavLinks.navItems[0].href} indentationLevel={0}/>);
   const navLinksWithSubNavLinksResultTag = renderer.getRenderOutput(navLinksWithSubNavLinksComponent);
   
   it('Verify renders No nav links when given empty navLinks property', function() {
      expect(nullNavLinksComponent).toBe(null)
   })

   it('Verify simple Navigation Links are wrapped in ul tag', function() {
     expect(simpleNavLinksResultTag.type).toBe('ul')
     expect(simpleNavLinksResultTag.props.className).toBe('nav nav-stacked')
     expect(simpleNavLinksResultTag.props.children.length).toBe(2)
   })

   it('Verify simple navigation links', function() {
      expect(simpleNavLinksResultTag.props.children).toEqual([
         <NavLink key={simpleNavLinks.navItems[0].text} text={simpleNavLinks.navItems[0].text} href={simpleNavLinks.navItems[0].href} preIcon={simpleNavLinks.navItems[0].preIcon} postIcon={simpleNavLinks.navItems[0].postIcon} handleClick={clickHandler} active={true} indentationLevel={0} children={null} />,
        <NavLink key={simpleNavLinks.navItems[1].text} text={simpleNavLinks.navItems[1].text} href={simpleNavLinks.navItems[1].href} preIcon={simpleNavLinks.navItems[1].preIcon} postIcon={simpleNavLinks.navItems[1].postIcon} handleClick={clickHandler} active={false} indentationLevel={0} children={null}/> 
      ])
   })

   it('Verify navigation links with sub navigation links', function() {
      expect(navLinksWithSubNavLinksResultTag.type).toBe('ul')
      expect(navLinksWithSubNavLinksResultTag.props.children.length).toBe(2)
      expect(navLinksWithSubNavLinksResultTag.props.children).toEqual([
         <NavLink key={navLinksWithSubNavLinks.navItems[0].text} text={navLinksWithSubNavLinks.navItems[0].text} href={navLinksWithSubNavLinks.navItems[0].href} preIcon={navLinksWithSubNavLinks.navItems[0].preIcon} postIcon={navLinksWithSubNavLinks.navItems[0].postIcon} handleClick={clickHandler} active={true} indentationLevel={0} children={null}/>,
         <NavLink key={navLinksWithSubNavLinks.navItems[1].text} text={navLinksWithSubNavLinks.navItems[1].text} href={navLinksWithSubNavLinks.navItems[1].href} preIcon={navLinksWithSubNavLinks.navItems[1].preIcon} postIcon={navLinksWithSubNavLinks.navItems[1].postIcon} handleClick={clickHandler} active={false} indentationLevel={0}>
            <NavLinks navLinks={navLinksWithSubNavLinks.navItems[1]} handleClick={clickHandler} activeNavLinkHref={navLinksWithSubNavLinks.navItems[0].href} indentationLevel={1}/>
         </NavLink>
      ]) 
   })

});