import React from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">

        <ul>
          <li>
            <NavLink
              to="/"
              exact
              >Home</NavLink>
          </li>
          <li>|</li>
          <li>
              <NavLink
                to="/newuser"
                exact
                >New User</NavLink>
            </li>
            <li>|</li>
            <li>
              <NavLink
                to="/login"
                exact
                >Login</NavLink>
            </li>
            <li>|</li>
            <li>
              <NavLink
                to="/newdive"
                exact
                >New Dive</NavLink>
            </li>

          </ul>
      </div>
    )
  }
}

export default Navbar; 