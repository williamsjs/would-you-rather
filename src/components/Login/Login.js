import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import LoadingBar from 'react-redux-loading';

class Login extends Component {
  login = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(2323));
  }

  render() { 
    const { users, loading } = this.props;
    const userKeys = Object.keys(users);
    return ( 
      <div className="login">
        <LoadingBar />
        {loading && (
          <h1>loading</h1>
        )
          ? null
          : userKeys.map(userKey => (
            <p key={users[userKey].id}>{users[userKey].id}</p>
          ))
        }
        <button onClick={this.login}>login</button>
      </div>
    );
  }
}

const mapStateToProps = ({users}) => ({users, loading: Object.entries(users).length === 0});

export default connect(mapStateToProps)(Login);