import React from 'react';
import GlobalHeader from '../GlobalHeader.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Global Header', function() {
  var input = {
    logo: 'testlogo',
    profileName: 'testProfileName',
    profileAvatar: 'testProfileAvatar',
  };
  const renderedComponent = TestUtils.createRenderer();
  renderedComponent.render(<GlobalHeader />);
  const resultTag = renderedComponent.getRenderOutput();
  const header = TestUtils.renderIntoDocument(<GlobalHeader />);
  const headerwithProps = TestUtils.renderIntoDocument(
    <GlobalHeader {...input} />
  );

  it('renders the tag', function() {
    expect(resultTag.type).toBe('header');
  });

  it('verify the className', function() {
    expect(resultTag.props.className).toBe('container-fluid');
  });

  it('find element with tag', function() {
    let divElm = TestUtils.scryRenderedDOMComponentsWithTag(header, 'div');
    expect(divElm.length).toEqual(5);
    let ulElm = TestUtils.scryRenderedDOMComponentsWithTag(header, 'ul');
    expect(ulElm.length).toEqual(1);
    let liElm = TestUtils.scryRenderedDOMComponentsWithTag(header, 'li');
    expect(liElm.length).toEqual(6);
  });

  it('find element with class and default props', function() {
    let divElmArr = TestUtils.scryRenderedDOMComponentsWithClass(header, 'row');
    expect(divElmArr.length).toEqual(1);
    var divtElm1 = TestUtils.findRenderedDOMComponentWithClass(header, 'logo');
    expect(divtElm1.className).toBe('logo');
    expect(divtElm1.textContent).toEqual('CWDS');
    var ulElm1 = TestUtils.findRenderedDOMComponentWithClass(
      header,
      'header-actions'
    );
    expect(ulElm1.className).toBe('header-actions');
    var pElm1 = TestUtils.findRenderedDOMComponentWithClass(header, 'profile');
    expect(pElm1.className).toBe('profile');
    expect(pElm1.textContent).toEqual(' Profile Name');
    var dElm1 = TestUtils.findRenderedDOMComponentWithClass(
      header,
      'profile-avatar'
    );
    expect(dElm1.className).toBe('profile-avatar');
    expect(dElm1.textContent).toEqual('PN');
    var iEle1 = TestUtils.findRenderedDOMComponentWithClass(
      header,
      'fa fa-search'
    );
    expect(iEle1.className).toBe('fa fa-search');
    var iEle2 = TestUtils.findRenderedDOMComponentWithClass(
      header,
      'fa fa-plus'
    );
    expect(iEle2.className).toBe('fa fa-plus');
    var iEle3 = TestUtils.findRenderedDOMComponentWithClass(
      header,
      'fa fa-bell'
    );
    expect(iEle3.className).toBe('fa fa-bell');
  });

  it('check default props', function() {
    expect(header.props.logo).toEqual('CWDS');
    expect(header.props.profileName).toEqual('Profile Name');
    expect(header.props.profileAvatar).toEqual('PN');
  });

  it('find element with class and object passed as props', function() {
    var divtElm1 = TestUtils.findRenderedDOMComponentWithClass(
      headerwithProps,
      'logo'
    );
    expect(divtElm1.className).toBe('logo');
    expect(divtElm1.textContent).toEqual('testlogo');
    var pElm1 = TestUtils.findRenderedDOMComponentWithClass(
      headerwithProps,
      'profile'
    );
    expect(pElm1.className).toBe('profile');
    expect(pElm1.textContent).toEqual(' testProfileName');
    var dElm1 = TestUtils.findRenderedDOMComponentWithClass(
      headerwithProps,
      'profile-avatar'
    );
    expect(dElm1.className).toBe('profile-avatar');
    expect(dElm1.textContent).toEqual('testProfileAvatar');
  });
});
