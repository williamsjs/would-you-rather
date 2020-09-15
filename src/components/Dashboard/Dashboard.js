import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';

class Dashboard extends Component {
  render() { 
    const { authedUser, users } = this.props;

    return ( 
      <div className="dashboard">
        Welcome, {users[authedUser].name}
        <Nav />
      </div>
    );
  }
}

const mapStateToProps = ({authedUser, users}) => ({authedUser, users});
export default connect(mapStateToProps)(Dashboard);