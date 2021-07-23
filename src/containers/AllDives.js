import React, { Component } from 'react'
import { connect } from 'react-redux';
import AllDivesCard from '../components/AllDivesCard';

class Dashboard extends Component {
    loggedDives = () => {
        console.log("inside loggedDives()", this.props.currentUser)
        // return this.props.dives.filter(dives => dives.user_id === this.props.currentUser.id).map(dive => <li key={dive.id}>{dive.location}, {dive.buddy}</li>)
        return this.props.dives.map(dive => <AllDivesCard key={dive.id} {...dive} />)
    }
    
    render() {
        console.log("Dashboard render", this.state)
        return (
            <div className="dives">
                <h2>All Logged Dives!</h2>
                { this.props.dives ? 
                <ul> {this.loggedDives()}</ul>
                :
                <h2>Something went wrong, please try again.</h2>
                }
            </div>
        )
    }
    
}
const mapStateToProps = state => {
    console.log("mapState", state)
    return {
        dives: state.dives.data
    }
}

export default connect(mapStateToProps)(Dashboard)