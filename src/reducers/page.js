const initialState = {
    pageNumber: 1,
}

export const page = (state = initialState, action) => {
    if(action.type === 'INCREMENT') {
        return {
            pageNumber: state.pageNumber + 1
        }
    } else if (action.type === 'DECREMENT') {
        return {
            pageNumber: state.pageNumber - 1
        }
    }
    return state;
}