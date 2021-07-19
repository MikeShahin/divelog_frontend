import React from 'react';

class Logout extends React.Component {

    handleClick = () => {
        fetch("http://localhost:3001/logout", {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => alert(data.message))
        console.log("logout state:", this.state)
        this.setState({
        ...this.state, currentUser: null,
        })
    }

    render() {
        return (

            <div>
            <button onClick={this.handleClick}>Logout</button>
        </div>
            )
    }
}

export default Logout
