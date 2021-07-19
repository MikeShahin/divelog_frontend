export const setCurrentUser = ({user}) => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
  }
  
export const getCurrentUser = userCredentials => {
    return dispatch => {
        return fetch("http://localhost:3001/get_current_user", {
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
            })
            .then(r => r.json())
            .then(resp => {
            if (resp.error) {
                console.log("not working ughhh")
            } else {
                dispatch(setCurrentUser(resp))
            }
            })
            .catch(console.log)

    }
}