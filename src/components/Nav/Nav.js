import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';

class Nav extends Component {
  logout = () => {
    this.props.dispatch(setAuthedUser(null));
  }

  render() { 
    return ( 
      <ul className="nav-bar">
        <li><a href="#">Home</a></li>
        <li><a href="#">Questions</a></li>
        <li><a href="#" onClick={this.logout}>Logout</a></li>
      </ul>
    );
  }
}

export default connect()(Nav);