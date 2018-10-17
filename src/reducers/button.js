const initialState = {
    buttonDisabled: true
}

export const button = (state = initialState, action) => {
    if(action.type === 'BLOCK_BUTTONS') {
        return {
            buttonDisabled: true
        }
    }
    if(action.type === 'SHOW_BUTTONS') {
        return {
            buttonDisabled: false
        }
    }
    return state;
}