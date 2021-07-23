import React from 'react';
import { connect } from 'react-redux'
import { signup } from '../actions/newUser'
import { getCurrentUser } from '../actions/currentUser'
import { signin } from '../actions/currentUser'
import { Redirect } from "react-router";

class NewUser extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
    navigate: false
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      navigate: true
  })
    this.props.signup(this.state)
  }

  render() {
      const {username, email, password, navigate} = this.state
      
      if (navigate) {
        return <Redirect to="/login" push={true} />
      }
      return (
          <div>
              <h1>Sign Up</h1>        
              <form onSubmit={this.handleSubmit}>
                <input
                  placeholder="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />

                <input
                  placeholder="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />

                <input 
                  placeholder="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />       
            
                <button placeholder="submit" type="submit">
                  Sign Up
                </button>
            
              </form>
          </div>
      );
    }
}
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { signup, signin, getCurrentUser })(NewUser); 