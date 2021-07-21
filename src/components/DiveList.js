import React from 'react'

class DiveList extends React.Component {
    loggedDives = () => {
        return this.props.dives.map(dive => <p>{dive.location}</p>)
    }

    render() {
        return (
            <div>
                {this.loggedDives}
            </div>
        )
    }
}

export default DiveList