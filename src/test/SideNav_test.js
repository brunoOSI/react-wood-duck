import React from 'react'
import TestUtils from 'react-dom/lib/ReactTestUtils'
import SideNav from '../SideNav'
import NavLinks from '../NavLinks'

describe('Side Nav', function() 
{
    const simpleNavLinks = [{ type: "navLinks", navItems: [
                          {type: "navLink", text: "Tommy Cambell", href: "#", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Aubrey Cambell", href:"#", preIcon: "fa fa-user"},
                          {type: "navLink", text: "Chris Cambell", href: "#", preIcon: "fa fa-user"},
                       ]
                     }];
    const renderer = TestUtils.createRenderer()
    const sideNavWithNavigationLinksRendered = renderer.render(<SideNav content={simpleNavLinks}/>)
    const sideNavWithnavigationLinksresultTag = renderer.getRenderOutput()
    it('returns null when content is empty', function() {
	const componentRendered = renderer.render(<SideNav />)
        const resultTag = renderer.getRenderOutput()
	expect(resultTag).toBe(null);
    })

    it('returns side nav element given valid content', function() {
        expect(sideNavWithnavigationLinksresultTag).not.toBe(null)
        expect(sideNavWithnavigationLinksresultTag.type).toBe('div')
        expect(sideNavWithnavigationLinksresultTag.props.className).toBe('container hidden-xs col-md-3')
        expect(sideNavWithnavigationLinksresultTag.props['aria-label']).toBe('Side Nav')
    })

    it('returns side nav element with a bunch of navigation links given content with navigation links details', function() {
	expect(sideNavWithnavigationLinksresultTag).not.toBe(null)
        expect(sideNavWithnavigationLinksresultTag.props.children.length).toBe(1)
        expect(sideNavWithnavigationLinksresultTag.props.children[0].type).toBe('div')
        expect(sideNavWithnavigationLinksresultTag.props.children[0].props.className).toBe('row')
        expect(sideNavWithnavigationLinksresultTag.props.children[0]).toEqual(<div className="row" key={0} role="navigation" aria-label="Main Content Navigation Menu"><NavLinks navLinks={simpleNavLinks[0]} /></div>)
    })

    it('returns navigation links with proper accessibility tags given content with navigation links details', function() {
        expect(sideNavWithnavigationLinksresultTag.props.children[0].props['aria-label']).toBe('Main Content Navigation Menu')
        expect(sideNavWithnavigationLinksresultTag.props.children[0].props.role).toBe('navigation')
    })

    it('returns side nav element with default column width when columnWidth is not provided', function() {
	const componentRendered = renderer.render(<SideNav content={[{"var1": "value1"}, {"var2": "value2"}]} />)
	const resultTag = renderer.getRenderOutput()
	expect(resultTag.props.className).toContain('col-md-3')
    })

    it('returns side nav element with specified column width', function() {
	const componentRendered = renderer.render(<SideNav content={[{"var1": "value1"}, {"var2": "value2"}]} columnWidth={4} />)
	const resultTag = renderer.getRenderOutput()
	expect(resultTag.props.className).toContain('col-md-4')
    })
})
