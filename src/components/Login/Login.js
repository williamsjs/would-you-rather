import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import LoadingBar from 'react-redux-loading';

class Login extends Component {
  state = {
    selectedId: ''
  }

  login = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.selectedId));
  }

  handleChange = (e) => {
    e.persist();
    this.setState(() => ({selectedId: e.target.value}));
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
          : (
              <select value={this.state.selectedId} onChange={this.handleChange}>
                <option value="">Select user</option>
                {userKeys.map(userKey => (
                  <option key={users[userKey].id} value={users[userKey].id}>{users[userKey].name}</option>
                ))}
              </select>
            )
        }
        <button onClick={this.login}>login</button>
      </div>
    );
  }
}

const mapStateToProps = ({users}) => ({users, loading: Object.entries(users).length === 0});

export default connect(mapStateToProps)(Login);