export function fetchDives() {
    return (dispatch) => {
        return fetch('http://localhost:3001/dives/')
        .then(response => response.json())
        .then(json => dispatch(
            { type: "SHOW_DIVES", data: json }))
        }
}

export function addDive(diveInfo) {
    return dispatch => {
        return fetch("http://localhost:3001/dives", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({dive: diveInfo})
        })
        .then(r => r.json())
        .then(response => {
            console.log("New Dive res-info", diveInfo)
            console.log("New Dive res", response)
            if (response.error) {
                alert("something went wrong!")
            } else {
                dispatch({
                    type: "CREATE_DIVE",
                    dive: response
                })
                alert("Dive Logged!")
            }
        })
    }
}