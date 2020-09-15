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
        <li class="nav-link"><a href="#">Home</a></li>
        <li class="nav-link"><a href="#">New Question</a></li>
        <li class="nav-link"><a href="#">Leaderboard</a></li>
        <li class="nav-link"><a href="#" onClick={this.logout}>Logout</a></li>
      </ul>
    );
  }
}

export default connect()(Nav);