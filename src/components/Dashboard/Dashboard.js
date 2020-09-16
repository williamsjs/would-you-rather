import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import NewQuestion from '../NewQuestion/NewQuestion';
import Leaderboard from '../Leaderboard/Leaderboard';
import {
  Switch,
  Route
} from 'react-router-dom';

class Dashboard extends Component {
  render() { 
    const { authedUser, users } = this.props;

    return ( 
      <div className="dashboard">
        Welcome, {users[authedUser].name}
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/new-question">
            <NewQuestion />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({authedUser, users}) => ({authedUser, users});
export default connect(mapStateToProps)(Dashboard);