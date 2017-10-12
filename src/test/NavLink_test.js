import React from 'react';
import NavLink from '../NavLink.js';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/lib/ReactTestUtils';
//import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('NavLink', function() {
   //var ReactTestUtils = React.addons.TestUtils
   const navLinkHref = "test.html"
   const navLinkText = "Nav Link Test"
   const navLinkClass = "navlink"
   const preIconClass = "fa fa-user"
   const postIconClass = "fa icon-warning-sign"
   const renderedComp = ReactTestUtils.createRenderer();
   const compRendered = renderedComp.render(<NavLink href={navLinkHref} text={navLinkText} />);
   const resultTag = renderedComp.getRenderOutput();
   var navLinkWithoutPrePostIcons = ReactTestUtils.renderIntoDocument(<NavLink href={navLinkHref} text={navLinkText} />)
   var navLinkWithPreIcon = ReactTestUtils.renderIntoDocument(<NavLink href={navLinkHref} text={navLinkText} preIcon={preIconClass} />)
   var navLinkWithPostIcon = ReactTestUtils.renderIntoDocument(<NavLink href={navLinkHref} text={navLinkText} postIcon={postIconClass} />)
   const navLinkWithPrePostIcons = ReactTestUtils.renderIntoDocument(<NavLink href={navLinkHref} text={navLinkText} preIcon={preIconClass} postIcon={postIconClass} />)
   const navLinkWithChildren = ReactTestUtils.renderIntoDocument(<NavLink href={navLinkHref} text={navLinkText}><span>Test Child</span></NavLink>)
   it('verify basic navlink', function() {
      expect(navLinkWithoutPrePostIcons).not.toBe(null)
      expect(ReactTestUtils.isCompositeComponent(navLinkWithoutPrePostIcons, NavLink)).toBe(true)
      const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithoutPrePostIcons, 'li')
      var liElementDOM = ReactDOM.findDOMNode(liElement)
      expect(liElementDOM).not.toBe(null)
      expect(liElement.className).toBe(navLinkClass)
      expect(liElement.children.length).toBe(1)
      const anchorElement = liElement.children[0]
      expect(anchorElement.tagName).toBe('a'.toUpperCase())
      expect(anchorElement.textContent).toBe(navLinkText)
      expect(anchorElement.href).toContain(navLinkHref)
   })

   it('verify navlink element with pre icon', function() {
      expect(ReactTestUtils.isCompositeComponent(navLinkWithPreIcon, NavLink)).toBe(true)
      const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithPreIcon, 'li')
      expect(liElement.children.length).toBe(2)
      const preIconElement = liElement.children[0]
      expect(preIconElement.tagName).toBe('i'.toUpperCase())
      expect(preIconElement.className).toBe(preIconClass)
      expect(liElement.children[1].tagName).toBe( 'a'.toUpperCase())
   })

   it('verify navlink element with post icon', function() {
      expect(ReactTestUtils.isCompositeComponent(navLinkWithPostIcon, NavLink)).toBe(true)
      const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithPostIcon, 'li')
      expect(liElement.children.length).toBe(2)
      expect(liElement.children[0].tagName).toBe( 'a'.toUpperCase())
      const postIconElement = liElement.children[1]
      expect(postIconElement.className).toContain(postIconClass)
   })

   it('verify navlink renders with pre & post icons', function() {
      expect(ReactTestUtils.isCompositeComponent(navLinkWithPrePostIcons, NavLink)).toBe(true)
      const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithPrePostIcons, 'li')
      expect(liElement.children.length).toBe(3)
      const preIconElement = liElement.children[0]
      expect(preIconElement.tagName).toBe('i'.toUpperCase())
      expect(preIconElement.className).toBe(preIconClass)
      expect(liElement.children[1].tagName).toBe('a'.toUpperCase())
      const postIconElement = liElement.children[2]
      expect(postIconElement.tagName).toBe('i'.toUpperCase())
      expect(postIconElement.className).toContain(postIconClass)
   })

   /*it('verify navlink style changes in hover state', function() {
      const anchorElement = ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithoutPrePostIcons, 'a')
      console.log('anchor text: ' + anchorElement.textContent)
      ReactTestUtils.Simulate.mouseOver(anchorElement)
      console.log("href props.length: " + anchorElement.props)
      console.log("comp: " + window.getComputedStyle(ReactDOM.findDOMNode(anchorElement)).getPropertyValue('color'))
      console.log("anchorElem: " + anchorElement)
      console.log("href class list: " + anchorElement.classList)
      console.log("href class name: " + anchorElement.className)
   })*/

   it('verify navlink redners child components', function() {
      const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithChildren, 'li')
      expect(liElement.children.length).toBe(2)
      //expect(ReactTestUtils.findRenderedDOMComponentWithTag(liElement, 'a')).not.toBe(null)
      expect(liElement.children[0].tagName).toBe('a'.toUpperCase())
      expect(liElement.children[1].tagName).toBe('span'.toUpperCase())
   })
});
