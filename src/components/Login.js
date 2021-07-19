import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser'
import Logout from '../components/Logout'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
     };
  }
  
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  stateCheck = () => {
    console.log("w", this.state)
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password} = this.state
    let userInfo = {
      username: username,
      email: email,
      password: password
    }
    const headers = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: userInfo
      })
    }
    
    fetch("http://localhost:3001/login", headers)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          
          console.log("login state:", this.state)
          alert("invalid credentials")
        } else {
          
          this.setState({
            currentUser: data.user,
            loginForm: {
              username: "",
              email: "",
              password: ""
            }
          })
          // this.redirect()
          console.log("login state:", this.state)
        }
      })
      .catch(console.log)
  };
  
  redirect = () => {
    this.props.history.push('/')
  }
  
  handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  };
  
  render() {
    const {username, email, password} = this.state 
    const { currentUser } = this.props
    return (
      <div>
        <h2>{ currentUser ?
        `Logged in as ${currentUser.username}` :
        "Not logged in"
       }</h2>

        <h1>Log In</h1>        
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
            Log In
          </button> 
         </form>
         < Logout logout={this.logout}/>
         <button onClick={this.stateCheck}>State</button>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}
export default connect(mapStateToProps, {getCurrentUser: getCurrentUser})(Login);