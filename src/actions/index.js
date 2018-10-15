export const pokemonsFetched = (pokemons) => ({
    type: 'FETCH_POKEMONS_SUCCESS',
    pokemons
});

export const pokemonsAmountFetched = (pokemonsAmountValue) => ({
    type: 'FETCH_POKEMONS_AMOUNT_SUCCESS',
    pokemonsAmountValue
});

export const updateLoader = (booleanValue) => ({
    type: 'LOADER_VALUE',
    booleanValue
});

export const pageIncrement = () => ({
    type: 'INCREMENT'
});
export const pageDecrement = () => ({
    type: 'DECREMENT'
});

export const blockButtons = () => ({
    type: 'BLOCK_BUTTONS'
});
export const showButtons = () => ({
    type: 'SHOW_BUTTONS'
});