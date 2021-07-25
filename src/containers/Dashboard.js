import React, { Component } from 'react'
import { connect } from 'react-redux';
import Logout from './Logout';
import UserDiveCard from '../components/UserDiveCard';
import { Redirect } from "react-router";
import { fetchDives } from '../actions/dives';

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchDives()
    }

    loggedDives = () => {
        return this.props.dives.filter(dives => dives.user_id === this.props.currentUser.id).map(dive => <UserDiveCard key={dive.id} {...dive} />)
    }
    
    render() {
        return (
            <div className="dives">
                { this.props.currentUser ? 
                <>
                    <h2>{this.props.currentUser.username}'s Logged Dives</h2>
                    <> {this.loggedDives()}</>
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
    return {
        currentUser: state.currentUser,
        dives: state.dives.data
    }
}

export default connect(mapStateToProps, {fetchDives})(Dashboard)