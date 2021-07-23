export const signin = (credentials) => {
    return dispatch => {
        return fetch("http://localhost:3001/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(r => r.json())
        .then(response => {
          console.log("login after signup", response)
          console.log("login creds after signup", credentials)
          if (response.error) {
            alert("invalid credentials")
          } else {
            dispatch({
              type: "SET_CURRENT_USER", 
              user: response.user
            })
          }
        })
        .catch(console.log)
    }
}

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
              console.log(resp)
            if (resp.error) {
            } else {
                dispatch(setCurrentUser(resp))
            }
            })
            .catch(console.log)
    }
}

export const logout = () => {
  return dispatch => {
    return fetch("http://localhost:3001/logout", {
      method: "DELETE",
      credentials: "include",
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(() => {
        dispatch({type: "CLEAR_SESSION"})
    })
    }

}