const initialState = {
    pokemonsAmountValue: 0,
    pokemonsPerPage: 16
}

export const pokemonsAmount = (state = initialState, action) => {
    if(action.type === 'FETCH_POKEMONS_AMOUNT_SUCCESS') {
        return {
            pokemonsAmountValue: action.pokemonsAmountValue,
            pokemonsPages: Math.ceil(action.pokemonsAmountValue / state.pokemonsPerPage),
            pokemonsPerPage: state.pokemonsPerPage
        }
    }
    return state;
}