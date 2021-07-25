import React from 'react';
import { NavLink } from 'react-router-dom';
import { getCurrentUser } from '../actions/currentUser';
import { connect } from 'react-redux';

class Navbar extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  
  render() {
    const link = {
      width: '100px',
      padding: '12px',
      margin: '0 6px 6px',
      textDecoration: 'none',
      color: 'teal',
    }
    const { currentUser } = this.props
    return (
      <div className="navbar">

        <ul>
          <li>
            <NavLink
              to="/"
              exact
              style={link}
              activeStyle={{
                color: 'aqua',
              }}
              >Home</NavLink>
          </li>
          <li>|</li>
          { currentUser ? 
          <div>
              <li>
                <NavLink
                  to="/dashboard"
                 exact
                 style={link}
                 activeStyle={{
                   color: 'aqua'
                 }} 
                >Dashboard</NavLink>


              </li>
              <li>|</li>
              <li>
                <NavLink
                  to="/newdive"
                  exact
                  style={link}
                  activeStyle={{
                    color: 'aqua'
                  }}
                  >New Dive</NavLink>
              </li> 
            
            </div>
            :
            <>
              <li>
                <NavLink
                  to="/login"
                  exact
                  style={link}
                  activeStyle={{
                    color: 'aqua'
                  }}
                  >Login</NavLink>
              </li>
              <li>|</li>
              <li>
              <NavLink
                to="/newuser"
                exact
                style={link}
                activeStyle={{
                  color: 'aqua'
                }}
                >New User</NavLink>
              </li>
            </>
          
          }
            <li>|</li>
              <li>
                <NavLink
                  to="/dives"
                  exact
                  style={link}
                  activeStyle={{
                    color: 'aqua'
                  }}
                  >All Dives</NavLink>
              </li>
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