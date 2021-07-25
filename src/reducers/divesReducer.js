export const divesReducer = (state = {}, action) => {
    switch(action.type) {

        case 'SHOW_DIVES':
            return { ...state, data: action.data }

        case 'CREATE_DIVE':
            return {
                ...state,
                dive: action.dive
            }
        
        default:
            return state
    }
}
