import React from 'react';
import PropTypes from 'prop-types';

class NavLink extends React.Component {

  render() {
    console.debug('nav link props: ' + this.props.active);
    const preIcon = this.props.preIcon ? (
      <i className={this.props.preIcon} />
    ) : null;
    const postIcon = this.props.postIcon ? (
      <i className={`${this.props.postIcon} post-navlink-icon`} />
    ) : null;
    const activeNavLinkClassName = this.props.active
      ? 'active-navlink'
      : 'inactive-navlink';
    const activeAnchorClassName = this.props.active ? 'active' : '';
    const indentationStyle = {
      marginRight: this.props.indentationLevel * 3 + 'rem',
    };
    return (
      <li className="navlink" key={this.props.text}>
        <span className={activeNavLinkClassName} style={indentationStyle} />
        {preIcon}
        <a
          href={this.props.href}
          className={activeAnchorClassName}
          onClick={e => this.props.handleClick(this.props.href, e)}
        >
          {this.props.text}
        </a>
        {postIcon}
        {this.props.children}
      </li>
    );
  }
}

NavLink.PropTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  preIcon: PropTypes.string,
  postIcon: PropTypes.string,
  active: PropTypes.boolean,
  handleClick: PropTypes.func,
  indentationLevel: PropTypes.number,
};

NavLink.defaultProps = {
  preIcon: '',
  postIcon: '',
  active: false,
  handleClick: null,
  indentationLevel: 0,
};

export default NavLink;
