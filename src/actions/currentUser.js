export const signin = () => {
    return (dispatch) => {
        const {username, email, password} = this.state
        let userInfo = {
            username: username,
            email: email,
            password: password
        }
        const headers = {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: userInfo
        })
        }
        
        fetch("http://localhost:3001/login", headers)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
            alert("invalid credentials")
            } else {
                dispatch({ type: 'CREATE_SESSION'})
            this.props.setCurrentUser(data.user)
            this.setState({
                currentUser: data.user,
                loginForm: {
                username: "",
                email: "",
                password: ""
                }
            })
            // this.redirect()
            console.log("login state:", this.state)
            }
        })
        .catch(console.log)
    }   
}

export const setCurrentUser = (user) => {
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
            } else {
                dispatch(setCurrentUser(resp))
            }
            })
            .catch(console.log)
    }
}
