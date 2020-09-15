import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import { Link } from 'react-router-dom';
import NavLink from '../NavLink/NavLink';

class Nav extends Component {
  logout = () => {
    this.props.dispatch(setAuthedUser(null));
  }

  render() { 
    return ( 
      <ul className="nav-bar">
        <li class="nav-link"><a href="#">Home</a></li>
        <NavLink path="/new-question">New Question</NavLink>
        <li class="nav-link"><a href="#">Leaderboard</a></li>
        <li class="nav-link"><a href="#" onClick={this.logout}>Logout</a></li>
      </ul>
    );
  }
}

export default connect()(Nav);