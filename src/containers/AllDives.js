import React, { Component } from 'react'
import { connect } from 'react-redux';
import AllDivesCard from '../components/AllDivesCard';
import { fetchDives } from '../actions/dives';

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchDives()
    }

    loggedDives = () => {
        return this.props.dives.map(dive => <AllDivesCard key={dive.id} {...dive} />)
    }
    
    render() {
        return (
            <div className="dives">
                <h2>All Logged Dives!</h2>
                { this.props.dives ? 
                <> {this.loggedDives()}</>
                :
                <h2>Something went wrong, please try again.</h2>
                }
            </div>
        )
    }
    
}
const mapStateToProps = state => {
    return {
        dives: state.dives.data
    }
}

export default connect(mapStateToProps, {fetchDives})(Dashboard)