import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Pokemon from './Pokemon/Pokemon';

class App extends Component {
  
	constructor(props) {
		super(props);
		this.state = {
			pokemons: null,
			currentPage: 1,
			pageLimit: 5,
			loader: false
		}
	}

	componentDidMount() {
		this.getPokemons( this.state.currentPage, this.state.pageLimit );
	}

	async getPokemons( currentPage, pageLimit ) {
		try {
			const response = await axios(`http://localhost:3000/pokemon?_page=${currentPage}&_limit=${pageLimit}`);
			this.setState({
				pokemons: response,
				loader: true
			});
		} catch (error) {
			console.log(error);
		}
	}

	renderPagination() {
		if ( this.state.currentPage === 1 ) {
			return (
				<ul className="card-pagination">
					<li>Strona {this.state.currentPage}</li>
					<li><a onClick={this.nextPage.bind(this)}>Next</a></li>
				</ul>
			)
		} else if ( this.state.currentPage >= 2 ) {
			return (
				<ul className="card-pagination">
					<li><a onClick={this.previousPage.bind(this)}>Previous</a></li>
					<li>Strona {this.state.currentPage}</li>
					<li><a onClick={this.nextPage.bind(this)}>Next</a></li>
				</ul>
			)
		}

	}

	nextPage() {
		this.setState({
			currentPage: this.state.currentPage + 1,
			loader: false
		}, () => {
			this.getPokemons(this.state.currentPage, this.state.pageLimit)
			console.log(this.state.currentPage);
		});
	}
	previousPage() {
		this.setState({
			currentPage: this.state.currentPage - 1,
			loader: false
		}, () => {
			this.getPokemons(this.state.currentPage, this.state.pageLimit)
			console.log(this.state.currentPage);
		});
	}

	displayPokemons() {
		if (this.state.loader) {
			let pokemnosAll = [...this.state.pokemons.data];
			return(
				pokemnosAll.map( (pokemon) => {
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
				{this.renderPagination()}
				{this.displayPokemons()}
			</div>
		);
	}
}

export default App;
