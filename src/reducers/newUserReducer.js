export const newUserReducer = (state = {currentUser: {}}, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return {
              ...state,
              currentUser: action.user
            }
    
        default:
            return state
    }
}