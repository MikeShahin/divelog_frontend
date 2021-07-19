import React from 'react';

class NewDive extends React.Component {

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

        let diveInfo = {
            user_id: userId,
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
                <h2>New Dive</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="user id"
                        type="text"
                        name="userId"
                        value={userId}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>
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
export default NewDive;