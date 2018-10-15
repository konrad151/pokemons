export const pokemons = (state = [], action) => {
    if(action.type === 'FETCH_POKEMONS_SUCCESS') {
        return [
            ...action.pokemons
        ]
        
    }
    return state;
}