import React from 'react'
import moment from 'moment'

const AllDivesCard = props => {

return (
    <div className="divecard center">
        <h3>Dive # {props.id}</h3>
        <p><strong>Location: </strong>{props.location}, <strong>date: </strong>{moment(props.date).format("MMM Do YYYY")}, <strong>time: </strong>{props.time}</p>
        <p><strong>Dive Time: </strong>{props.dive_time} min., <strong>Water Temp: </strong>{props.temperature} F, <strong>Visibility: </strong>{props.visibility} m <strong>Max Depth: </strong>{props.depth} m</p>
        <p><strong>Comments:</strong><br></br>{props.comments}</p>
        {props.picture !== "" && 
            <img src={props.picture} alt="dive pic"/>
        }
    </div>
)

}

export default AllDivesCard