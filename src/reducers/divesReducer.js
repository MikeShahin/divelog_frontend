const initialState = {
    data: null,
}

export const divesReducer = (state = initialState, action) => {
    switch(action.type) {
        // case 'LOADING':
        //     console.log("Loading diveFetch action", action)
        //     return 'Loading';

        case 'SHOW_DIVES':
            return { ...state, data: action.data }
        
        default:
            return state
    }
}
