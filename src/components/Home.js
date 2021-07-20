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
    return (
      <div>
        <h1>Welcome to the Dive Log</h1>
        <h2>{ currentUser ?
         
        < Logout />
        :
        "Not logged in"
       }</h2>
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