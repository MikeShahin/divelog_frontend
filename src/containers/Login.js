import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin, getCurrentUser, setCurrentUser } from '../actions/currentUser'
import { Redirect } from "react-router";

class Login extends Component {

  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signin(this.state)
  }
  
  render() {
    const {username, email, password} = this.state 
    const { currentUser } = this.props
    return (
      <>
        { currentUser ?
        <Redirect to="/dashboard" push={true} />
         :
        <div className="form-center">
          <form onSubmit={this.handleSubmit}>
          <h1>Log In</h1> 
            <label>Username:</label>
            <input
              placeholder="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <label>Email:</label>
            <input
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <label>Password:</label>
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />         
            <button placeholder="submit" type="submit">
              Log In
            </button> 
          </form>
        </div>
       }

      </>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {signin, setCurrentUser, getCurrentUser})(Login);