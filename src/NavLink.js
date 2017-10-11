import React from 'react';
import PropTypes from 'prop-types';

class NavLink extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      const preIcon = (this.props.preIcon ? <i className={this.props.preIcon}/> : null);
      const postIcon = (this.props.postIcon ? <i className={`${this.props.postIcon} post-navlink-icon`}/> : null);
      return(
         <li className="navlink" key={this.props.text}>
           {preIcon}<a href={this.props.href}>{this.props.text}</a>{postIcon}
           {this.props.children}
         </li>
      );
   }
}

NavLink.PropTypes = {
   href: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
   preIcon: PropTypes.string,
   postIcon: PropTypes.string
}

NavLink.PropTypes = {
   preIcon: "",
   postIcon: ""
}

export default NavLink;
