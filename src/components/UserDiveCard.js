import React from 'react'

const UserDiveCard = props => {

return (
    <div className="divecard center">
        <h3>Dive at {props.location}</h3>
        <p><strong>Buddy: </strong>{props.buddy} <strong>date: </strong>{props.date}, <strong>time: </strong>{props.time}</p>
        <p><strong>Dive Time: </strong>{props.dive_time} min., <strong>Water Temp: </strong>{props.temperature} F, <strong>Visibility: </strong>{props.visibility} m <strong>Max Depth: </strong>{props.depth} m</p>
        <p><strong>Comments:</strong><br></br>{props.comments}</p>
    </div>
)

}

export default UserDiveCard