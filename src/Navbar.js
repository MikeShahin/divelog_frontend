import React from 'react'
import { NavLink } from 'react-router-dom';
import { getCurrentUser } from './actions/currentUser';
import { connect } from 'react-redux'

class Navbar extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { currentUser } = this.props
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
          { currentUser ? 
          <div>
              <li>
                <NavLink
                  to="/dashboard"
                 exact 
                >Dashboard</NavLink>


              </li>
              <li>|</li>
              <li>
                <NavLink
                  to="/newdive"
                  exact
                  >New Dive</NavLink>
              </li> 
            
            </div>
            :
            <>
              <li>
                <NavLink
                  to="/login"
                  exact
                  >Login</NavLink>
              </li>
              <li>|</li>
              <li>
              <NavLink
                to="/newuser"
                exact
                >New User</NavLink>
              </li>
            </>
          
          }
          </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(Navbar); 