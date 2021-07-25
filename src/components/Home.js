import React from 'react';
import Logout from '../containers/Logout';
import { connect } from 'react-redux';


class Home extends React.Component {

  render() {
    return (
      <div className="home center">
          <>{ this.props.currentUser ?
          <div>
            <h1>Welcome to Dive Log, {this.props.currentUser.username}</h1>
            < Logout />
          </div>
          :
          <>
            <h1>Welcome to the Dive Log!</h1>
          </>
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

export default connect(mapStateToProps)(Home); 