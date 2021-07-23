import React, { Component } from 'react'
import { connect } from 'react-redux';
import Logout from './Logout';
import UserDiveCard from '../components/UserDiveCard';
import { Redirect } from "react-router";

class Dashboard extends Component {

    loggedDives = () => {
        return this.props.dives.filter(dives => dives.user_id === this.props.currentUser.id).map(dive => <UserDiveCard key={dive.id} {...dive} />)
    }
    
    render() {
        console.log("Dashboard render", this.props)
        return (
            <div className="dives">
                { this.props.currentUser ? 
                <>
                <h2>{this.props.currentUser.username}'s Dashboard</h2>
                <ul> {this.loggedDives()}</ul>
                </>
                :
                <Redirect to="/" push={true} />
                }
                < Logout />
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log("mapState", state)
    return {
        currentUser: state.currentUser,
        dives: state.dives.data
    }
}

export default connect(mapStateToProps)(Dashboard)