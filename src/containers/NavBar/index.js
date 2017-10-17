// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

// Styles
import './styles.css';

class NavBar extends Component {
  render() {
    return(
      <div>
        <nav className="black">
          <div className="nav-wrapper">
            <Link className="brand-logo left" to="/">Home</Link>
            <ul id="nav-mobile" className="right">
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>
       </nav>
       {this.props.children}
     </div>
    )
  }
};

export default NavBar;
