import React, { Component } from 'react';
import './App.css';
import { populateData } from '../../utils/api';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';

class App extends Component {
  componentDidMount() {
    populateData().then(data => {
      // TODO: dispatch action to populate state
    });
  }

  render() {
   
    return (
      <div className="App">
        <h1>App Component</h1>
      </div>
    );
  }
}

export default connect()(App);
