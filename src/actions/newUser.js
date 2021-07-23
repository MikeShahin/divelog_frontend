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
            if (response.error) {
                alert("something went wrong!")
            } else {
                dispatch({
                    type: "CREATE_USER",
                    user: response
                })
                alert("Success, please log in!")
            }
        })
    }
}