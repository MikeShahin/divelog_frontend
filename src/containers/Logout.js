import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser, logout } from '../actions/currentUser';
import { Redirect } from "react-router";


class Logout extends React.Component {
    state = {
        navigate: false
    }

    // handleClick = (e) => {
    //     e.preventDefault()
    //     this.setState({
    //         navigate: true
    //     })
    //     fetch("http://localhost:3001/logout", {
    //         method: "DELETE",
    //         credentials: "include",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         // alert(data.message)
    //         this.props.setCurrentUser(null)
    //     })
    // }
    //////////////////////////////////////////
    handleClick = (e) => {
        e.preventDefault()
        this.props.logout()
    }
    /////////////////////////////////////////
    render() {
        const { navigate } = this.state

        if (navigate) {
            return <Redirect to="/" push={true} />
        }
        return (

            <div className="center">
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

export default connect(mapStateToProps, {setCurrentUser, logout})(Logout)
