import React from 'react';
import './Pagination.sass';
import {connect} from 'react-redux';
import {updateLoader, pageIncrement, pageDecrement, blockButtons, showButtons, pokemonsAmountFetched} from '../../actions/index';

class Pagination extends React.Component {
    
    nextPage() {
        if ( !this.props.button.buttonDisabled ) {
            this.props.updateLoader(true)
            this.props.blockButtons()
            this.props.pageIncrement()
            console.log(this.props.pokemonsAmount.pokemonsPages)
            this.props.getNewPokemons( this.props.page.pageNumber + 1, this.props.pokemonsAmount.pokemonsPerPage)
        } 
    }
    previousPage() {
        if ( !this.props.button.buttonDisabled ) {
            this.props.updateLoader(true)
            this.props.blockButtons()
            this.props.pageDecrement()
            this.props.getNewPokemons( this.props.page.pageNumber - 1, this.props.pokemonsAmount.pokemonsPerPage)
        }
    }
    handlePreviousButton() {
        if ( this.props.page.pageNumber > 1 ) {
            return (
                <a onClick={() => this.previousPage()}><button className="prev" disabled={this.props.button.buttonDisabled}>Previous page</button></a>
            )
        }
    }

    handleNextButton() {
        if ( this.props.page.pageNumber < this.props.pokemonsAmount.pokemonsPages ) {
            return (
                <a onClick={() => this.nextPage()}><button className="next" disabled={this.props.button.buttonDisabled}>Next page</button></a>
            )
        }
    }

    render() {
        return (
            <div className="pagination__wrapper">
                {this.handlePreviousButton()}
                <p>Page {this.props.page.pageNumber} of {this.props.pokemonsAmount.pokemonsPages}</p>
                {this.handleNextButton()}
            </div>
        )
    }

};

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
        pokemonsAmount: state.pokemonsAmount,
		loader: state.loader,
        page: state.page,
        button: state.button
    }
};

const mapDispatchToProps = {updateLoader, pageIncrement, pageDecrement, blockButtons, showButtons, pokemonsAmountFetched};

export const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);