import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';

class Dashboard extends Component {
  render() { 
    return ( 
      <div className="dashboard">
        Dashboard page
        <Nav />
      </div>
    );
  }
}
 
export default connect()(Dashboard);