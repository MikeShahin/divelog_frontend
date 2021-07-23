import React from 'react';
import { connect } from 'react-redux'
import { addDive, fetchDives } from '../actions/dives'

class NewDive extends React.Component {

    state = {
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

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let diveInfo = {
            user_id: this.props.currentUser.id,
            buddy: this.state.buddy,
            date: this.state.date,
            time: this.state.time,
            location: this.state.location,
            temperature: this.state.temperature,
            visibility: this.state.visibility,
            dive_time: this.state.diveTime,
            depth: this.state.depth,
            comments: this.state.comments,
            picture: this.state.picture
        }
        this.props.addDive(diveInfo)
        this.props.fetchDives()
        this.props.history.push('/dashboard')
    }

    render() {
        const { currentUser } = this.props
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
                        placeholder="dive time (min.)"
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
                        placeholder="water temperature (F)"
                        type="text"
                        name="temperature"
                        value={temperature}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>
                    <input
                        placeholder="visibility (m)"
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
                    <label>Direct link (link ending in .jpg, png, etc.) to image uploaded <a href="https://imgur.com/">here</a>:</label>
                    <br></br>
                    <input
                        placeholder="image link"
                        type="text"
                        name="picture"
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

export default connect(mapStateToProps, { addDive, fetchDives })(NewDive)