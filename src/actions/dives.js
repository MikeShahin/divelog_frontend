export function showDive() {
    return (dispatch) => {

        // dispatch({type: "LOADING"})
        // fetch(`http://localhost:3001/users/${this.props.currentUser.id}`)
        return fetch('http://localhost:3001/users/1/')
        .then(response => response.json())
        .then(json => dispatch(
            { type: "SHOW_DIVES", data: json }))
        }
}