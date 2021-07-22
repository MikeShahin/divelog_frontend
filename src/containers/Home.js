import React from 'react';
import Logout from './Logout';
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'


class Home extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { currentUser } = this.props
    console.log("Home render", this.state)
    return (
      <div>
        <>{ currentUser ?
        <div>

          <h1>Welcome to the Dive Log, {currentUser.username}</h1>
          
          < Logout />
        </div>
        :
        <h1>Welcome to the Dive Log, please log in</h1>
       }</>
      </div>
    )


  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser: getCurrentUser})(Home); 