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
   it('verify basic navlink', function() {
      expect(navLinkWithoutPrePostIcons).not.toBe(null)
      expect(ReactTestUtils.isCompositeComponent(navLinkWithoutPrePostIcons, NavLink)).toBe(true)
      const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithoutPrePostIcons, 'li')
      var liElementDOM = ReactDOM.findDOMNode(liElement)
      expect(liElementDOM).not.toBe(null)
      expect(liElement.className).toBe(navLinkClass)
      expect(liElement.children.length).toBe(1)
      const anchorElement = ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithoutPrePostIcons, 'a')
      expect(anchorElement.textContent).toBe(navLinkText)
      expect(anchorElement.href).toContain(navLinkHref)
   })

   it('verify navlink element with pre icon', function() {
      expect(ReactTestUtils.isCompositeComponent(navLinkWithPreIcon, NavLink)).toBe(true)
      const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithPreIcon, 'li')
      expect(liElement.children.length).toBe(2)
      const preIconElement = ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithPreIcon, 'i')
      expect(preIconElement.className).toBe(preIconClass)
      expect(ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithPreIcon, 'a')).not.toBe(null) 
   })

   it('verify navlink element with post icon', function() {
      expect(ReactTestUtils.isCompositeComponent(navLinkWithPostIcon, NavLink)).toBe(true)
      const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithPostIcon, 'li')
      expect(liElement.children.length).toBe(2)
      const postIconElement = ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithPostIcon, 'i')
      expect(postIconElement.className).toContain(postIconClass)
      expect(ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithPostIcon, 'a')).not.toBe(null)
   })

   it('verify navlink renders with pre & post icons', function() {
      expect(ReactTestUtils.isCompositeComponent(navLinkWithPrePostIcons, NavLink)).toBe(true)
      const liElement = ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithPrePostIcons, 'li')
      expect(liElement.children.length).toBe(3)
      const preIconElement = ReactTestUtils.findRenderedDOMComponentWithClass(navLinkWithPrePostIcons, preIconClass)
      expect(preIconElement.tagName).toBe('i'.toUpperCase())
      const postIconElement = ReactTestUtils.findRenderedDOMComponentWithClass(navLinkWithPrePostIcons, postIconClass)
      expect(postIconElement.tagName).toBe('i'.toUpperCase())
      expect(ReactTestUtils.findRenderedDOMComponentWithTag(navLinkWithPrePostIcons, 'a')).not.toBe(null)
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
});
