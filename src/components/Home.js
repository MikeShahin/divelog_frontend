import React from 'react';
import Logout from '../containers/Logout';
import { connect } from 'react-redux'


class Home extends React.Component {

  render() {
    console.log("home", this.props.currentUser)
    return (
      <div className="home center">
          <>{ this.props.currentUser ?
          <div>

            <h1>Welcome to the Dive Log, {this.props.currentUser.username}</h1>
            <img src="https://i.imgur.com/51b4HOy.jpg" alt="dive pic" />

            < Logout />
          </div>
          :
          <>
            <h1>Welcome to the Dive Log, please log in</h1>
            <img src="https://i.imgur.com/4PV97qz.jpg" alt="dive pic" />
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