import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import { Link } from 'react-router-dom';

class Nav extends Component {
  logout = () => {
    this.props.dispatch(setAuthedUser(null));
  }

  render() { 
    return ( 
      <ul className="nav-bar">
        <li class="nav-link"><a href="#">Home</a></li>
        <li class="nav-link">
          <Link to="/new-question">New Question</Link>
        </li>
        <li class="nav-link"><a href="#">Leaderboard</a></li>
        <li class="nav-link"><a href="#" onClick={this.logout}>Logout</a></li>
      </ul>
    );
  }
}

export default connect()(Nav);