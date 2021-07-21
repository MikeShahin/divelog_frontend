import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showDive } from '../actions/dives';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchDives()
        console.log("Dashboard mount", this.props.data)
    }

    loggedDives = () => {
        return this.props.data.map(dive => <li>{dive.location}</li>)
    }

    render() {
        console.log("Dashboard render", this.props.data)
        return (
            <div>
                <h2>Dashboard</h2>
                {/* <ul> {this.loggedDives}</ul> */}
                <p>{this.state.dives.data[0].location}</p>
                {/* <DiveList dives={this.props.dives} /> */}
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDives: () => dispatch(showDive())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)