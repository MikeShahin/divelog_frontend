export const signup = (userInfo) => {
    return dispatch => {
        return fetch("http://localhost:3001/users", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({user: userInfo})
        })
        .then(r => r.json())
        .then(response => {
            console.log("New User Response", response)
            console.log("New User Response-info", userInfo)
            if (response.error) {
                alert("something went wrong!")
            } else {
                dispatch({
                    type: "CREATE_USER",
                    user: response
                })
            }
        })
    }
}