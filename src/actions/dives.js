export function fetchDives() {
    return (dispatch) => {
        return fetch('http://localhost:3001/dives/')
        .then(response => response.json())
        .then(json => dispatch(
            { type: "SHOW_DIVES", data: json }))
        }
}