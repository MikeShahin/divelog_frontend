import React from 'react';

class NewUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      errors: ''
     };
  }

  handleChange = (event) => {
    const {name, value} = event.target
    console.log(this.state)
    this.setState({
      [name]: value
    })
  };

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

    fetch('http://localhost:3001/users', headers)
    .then(res => {
      this.redirect()
      return res.json();
    })
    .catch(error => {
        console.log(error)
    })
  };
  
  redirect = () => {
    this.props.history.push('/')
  }

  render() {
      const {username, email, password} = this.state
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

export default NewUser; 