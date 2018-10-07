import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Pokemon from './Pokemon/Pokemon';

class App extends Component {
  
	constructor(props) {
		super(props);
		this.state = {
			pokemons: null,
			loader: false
		}
	}

	async componentDidMount() {
		try {
			const response = await axios('http://localhost:3000/pokemon');
			this.setState({
				pokemons: response,
				loader: true
			});
		} catch (error) {
			console.log(error);
		}
	}

	displayPokemons() {
		if (this.state.loader) {
			// console.log(this.state.pokemons.data);
			let pokemnosAll = [...this.state.pokemons.data];
			// let allTypes = [];
			// console.log(allTypes);
			return(
				pokemnosAll.map( (pokemon) => {
					// allTypes.push(pokemon.type.toString());
					return (
						<Pokemon
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
				<h1>loading...</h1>
			);
		}
	}

	render() {
		return (
			<div>
				{this.displayPokemons()}
			</div>
		);
	}
}

export default App;
