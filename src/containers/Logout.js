import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../actions/currentUser';

class Logout extends React.Component {

    handleClick = (e) => {
        e.preventDefault()
        fetch("http://localhost:3001/logout", {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => alert(data.message))
        console.log("logout state:", this.state)
        this.props.setCurrentUser(null)
        this.setState({
        ...this.state, currentUser: null,
        })
    }

    render() {
        return (

            <div>
            <button onClick={this.handleClick}>Logout</button>
        </div>
            )
    }
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }

export default connect(mapStateToProps, {setCurrentUser})(Logout)
