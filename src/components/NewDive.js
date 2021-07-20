import React from 'react';
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'

class NewDive extends React.Component {

    componentDidMount() {
        this.props.getCurrentUser()
      }

    constructor() {
        super();
        this.state = {
            userId: '',
            buddy: '',
            date: '',
            time: '',
            location: '',
            temperature: '',
            visibility: '',
            diveTime: '',
            depth: '',
            comments: '',
            picture: ''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {
            buddy,
            date,
            time,
            location,
            temperature,
            visibility,
            diveTime,
            depth,
            comments,
            picture
        } = this.state

        let diveInfo = {
            user_id: this.props.currentUser.id,
            buddy: buddy,
            date: date,
            time: time,
            location: location,
            temperature: temperature,
            visibility: visibility,
            dive_time: diveTime,
            depth: depth,
            comments: comments,
            picture: picture
        }
        console.log(this.state)
        const headers = {
            method: "POST",
            // credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                dive: diveInfo
            })
        }

        fetch('http://localhost:3001/dives', headers)
        .then(res => {
            return res.json();
        })
        .then(data => {
            this.setState({
                userId: '',
                buddy: '',
                date: '',
                time: '',
                location: '',
                temperature: '',
                visibility: '',
                diveTime: '',
                depth: '',
                comments: '',
                picture: ''
            })
            console.log(data)
        })
    };


    render() {
        const { currentUser } = this.props
        const {
            userId,
            buddy,
            date,
            time,
            location,
            temperature,
            visibility,
            diveTime,
            depth,
            comments,
            picture
        } = this.state

        return (
            <div className='new-dive-form center'>
                <h2>Tell us about your dive, {currentUser.username}</h2>
                
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Dive Buddy"
                        type="text"
                        name="buddy"
                        value={buddy}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>
                    <label>Date and time of dive:</label>
                    <br></br>
                    <input
                        placeholder="dive date"
                        type="date"
                        name="date"
                        value={date}
                        onChange={this.handleChange}
                    />                  
                    <input
                        placeholder="dive time"
                        type="time"
                        name="time"
                        value={time}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>
                    <input
                        placeholder="location"
                        type="text"
                        name="location"
                        value={location}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>
                    <input
                        placeholder="water temperature"
                        type="text"
                        name="temperature"
                        value={temperature}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>
                    <input
                        placeholder="visibility"
                        type="text"
                        name="visibility"
                        value={visibility}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>
                    <input
                        placeholder="dive duration (minutes)"
                        type="text"
                        name="diveTime"
                        value={diveTime}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>
                    <input
                        placeholder="depth (m)"
                        type="text"
                        name="depth"
                        value={depth}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>
                    <input
                        placeholder="image link"
                        type="text"
                        name="imageLink"
                        value={picture}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>
                    <textarea
                        placeholder="comments"
                        type="textarea"
                        name="comments"
                        value={comments}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>
                    <button placeholder="submit" type="submit">Log Dive</button>
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }

export default connect(mapStateToProps, {getCurrentUser: getCurrentUser})(NewDive)