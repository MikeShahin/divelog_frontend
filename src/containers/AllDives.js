import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchDives } from '../actions/dives';
import AllDivesCard from '../components/AllDivesCard';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchDives()
    }
    
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
                <> {this.loggedDives()}</>
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

const mapDispatchToProps = dispatch => {
    // console.log("hello", currentUser)
    return {
        fetchDives: () => dispatch(fetchDives())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)