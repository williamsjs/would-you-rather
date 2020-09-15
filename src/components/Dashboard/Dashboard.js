import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import NewQuestion from '../NewQuestion/NewQuestion';
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
          <Route path="/new-question">
            <NewQuestion />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({authedUser, users}) => ({authedUser, users});
export default connect(mapStateToProps)(Dashboard);