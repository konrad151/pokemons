const initialState = {
    loaderBooleanValue: true
}

export const loader = (state = initialState, action) => {
    if(action.type === 'LOADER_VALUE') {
        return {
            loaderBooleanValue: action.booleanValue
        }
    }
    return state;
}