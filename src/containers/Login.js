import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin, getCurrentUser, setCurrentUser } from '../actions/currentUser'
import Logout from './Logout';

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
  
  handleSubmit = (event) => {
    event.preventDefault()
    // this.props.signin()
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
          this.props.setCurrentUser(data.user)
          this.setState({
            currentUser: data.user,
            loginForm: {
              username: "",
              email: "",
              password: ""
            }
          })
          this.redirect()
        }
      })
      .catch(console.log)
  };
  ///////////////////////////////////////////////////////////
  // state = {
  //   username: '',
  //   email: '',
  //   password: ''
  // }

  // handleChange = (e) => {
  //   const {name, value} = e.target
  //   this.setState({
  //     [name]: value
  //   })
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.signin(this.state)
  //   this.setState({
  //     username: '',
  //     email: '',
  //     password: ''
  //   })
  // }
////////////////////////////////////////////////////////////////
  redirect = () => {
    this.props.history.push('/dashboard')
  }
  
  render() {
    const {username, email, password} = this.state 
    const { currentUser } = this.props
    return (
      <div>
        <h2>{ currentUser ?
        `Logged in as ${currentUser.username}, id: ${currentUser.id}` :
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
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     signin: () => dispatch(signin())
//   }
// }
export default connect(mapStateToProps, 
                      {signin, setCurrentUser, getCurrentUser}//, 
                      // mapDispatchToProps
                      )
                      (Login);