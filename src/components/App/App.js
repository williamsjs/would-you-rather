import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import { handleInitialData } from '../../actions/shared.js';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;

    return (
      <div className="app">
        {authedUser === null
        ? <Login />
        : <Dashboard />}
      </div>
    );
  }
}

const mapStateToProps = ({authedUser}) => ({authedUser});

export default connect(mapStateToProps)(App);
