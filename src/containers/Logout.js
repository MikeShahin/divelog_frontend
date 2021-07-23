import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';
import { Redirect } from "react-router";


class Logout extends React.Component {
    state = {
        navigate: false
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.logout()
    }

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

export default connect(mapStateToProps, {logout})(Logout)
