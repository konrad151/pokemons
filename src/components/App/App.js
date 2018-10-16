import React from 'react';
import './App.sass';
import axios from 'axios';
import {PokemonContainer} from '../Pokemon/Pokemon';
import {PaginationContainer} from '../Pagination/Pagination';
import {pokemonsFetched, updateLoader, showButtons, blockButtons, pokemonsAmountFetched} from '../../actions/index';

import { connect } from "react-redux";

class App extends React.Component {

	componentDidMount() {
		this.getPokemons( this.props.page.pageNumber, this.props.pokemonsAmount.pokemonsPerPage );
		this.getPokemonsAmount();
	}
	async getPokemons( page, pageLimit ) {
		try {
			const response = await axios(`http://localhost:3000/pokemon?_page=${page}&_limit=${pageLimit}`)
			.then( (response) => this.props.pokemonsFetched(response.data) )
			// .then ( (response) => console.log(response) )
			.then ( () => this.props.updateLoader(false) )
			.then( () => this.props.showButtons() )
		} catch (error) {
			console.log(error);
		}
	}
	async getPokemonsAmount() {
		try {
			const response = await axios(`http://localhost:3000/pokemon`)
			.then( (response) => this.props.pokemonsAmountFetched(response.data.length) )
		} catch (error) {
			console.log(error);
		}
	}
	displayPokemons() {
		if ( !this.props.loader.loaderBooleanValue) {
			let pokemnosAll = [...this.props.pokemons];
			return(
				pokemnosAll.map( (pokemon) => {
					return (
						<PokemonContainer
							key={pokemon.id}
							img={pokemon.img}
							num={pokemon.num}
							name={pokemon.name}
							type={pokemon.type}
						/>
					);
				})
			);
		} else {
			return(
				<div className="loader">
					<img src="/star-loader.svg" />
				</div>
			);
		}
	}

	render() {
		return (
			<div className="container">
					<img className="app-logo" src="/pokemons-list.png" />
					<div className="pagination">
						<PaginationContainer getNewPokemons={this.getPokemons.bind(this)} />
					</div>
					<div className="pokemons">
						{this.displayPokemons()}
					</div>
			</div>
		);
	}
	
}

const mapStateToProps = (state) => {
    return {
		pokemons: state.pokemons,
		pokemonsAmount: state.pokemonsAmount,
		loader: state.loader,
		page: state.page,
		button: state.button
    }
};

const mapDispatchToProps = {pokemonsFetched, updateLoader, showButtons, blockButtons, pokemonsAmountFetched};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);