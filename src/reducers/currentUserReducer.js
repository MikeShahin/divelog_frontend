export const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    
    case "SET_CURRENT_USER":
        return action.user

     case "CREATE_SESSION":
        return {
             ...state
            }
         
    default:
        return state
  }
}