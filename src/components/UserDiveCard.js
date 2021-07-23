import React from 'react'
import moment from 'moment'

const UserDiveCard = props => {

    return (
        <div className="divecard">
            {props.picture !== "" && 
                <img className="divecard-image" src={props.picture} alt="dive pic"/>
            }
            {props.picture === "" && 
                <img className="divecard-image" src="https://i.imgur.com/87BYxCK.jpg" alt="dive pic"/>
            }
            <div className="divecard-text">
            <h3>Dive at {props.location}</h3>
                <p><strong>Buddy: </strong>{props.buddy} <strong>date: </strong>{moment(props.date).format("MMM Do YYYY")}, <strong>time: </strong>{props.time}</p>
                <p><strong>Dive Time: </strong>{props.dive_time} min., <strong>Water Temp: </strong>{props.temperature} F, <strong>Visibility: </strong>{props.visibility} m <strong>Max Depth: </strong>{props.depth} m</p>
                <p><strong>Comments:</strong><br></br>{props.comments}</p>
            </div>
        </div>
    )

}

export default UserDiveCard