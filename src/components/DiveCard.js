import React from 'react'

const DiveCard = ({ dive }) =>
    <div>
        <p>{dive.location}</p>
        <p>{dive.buddy}</p>
    </div>

export default DiveCard