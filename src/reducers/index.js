import { combineReducers } from "redux";
import { pokemons } from './pokemons';
import { pokemonsAmount } from './pokemonsAmount';
import { loader } from './loader';
import { page } from './page';
import { button } from './button';

export default combineReducers({
    loader,
    pokemons,
    pokemonsAmount,
    page,
    button
});