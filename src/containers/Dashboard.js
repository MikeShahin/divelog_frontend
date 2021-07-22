import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchDives } from '../actions/dives';
import UserDiveCard from '../components/UserDiveCard';

class Dashboard extends Component {
    componentDidMount() {
        // const url = 'http://localhost:3001/users/1/'
        this.props.fetchDives()
        // console.log("Dashboard mount", this.props)
    }
    
    loggedDives = () => {
        console.log("inside loggedDives()", this.props.currentUser)
        // return this.props.dives.filter(dives => dives.user_id === this.props.currentUser.id).map(dive => <li key={dive.id}>{dive.location}, {dive.buddy}</li>)
        return this.props.dives.filter(dives => dives.user_id === this.props.currentUser.id).map(dive => <UserDiveCard key={dive.id} {...dive} />)
    }
    
    render() {
        console.log("Dashboard render", this.state)
        return (
            <div className="dives">
                <h2>{this.props.currentUser.username}'s Dashboard</h2>
                {/* { this.state ? 
                <ul> {this.loggedDives()}</ul>
                :
                <h2>nothing</h2>
                
            } */}
                <> {this.loggedDives()}</>
                {/* <p>{this.props.currentUser.id}</p> */}
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

const mapDispatchToProps = dispatch => {
    // console.log("hello", currentUser)
    return {
        fetchDives: () => dispatch(fetchDives())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)