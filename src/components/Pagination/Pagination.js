import React from 'react';
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
                <button disabled={this.props.button.buttonDisabled}><a onClick={() => this.previousPage()}>Poprzednia strona</a></button>
            )
        }
    }

    handleNextButton() {
        if ( this.props.page.pageNumber < this.props.pokemonsAmount.pokemonsPages ) {
            return (
                <button disabled={this.props.button.buttonDisabled}><a onClick={() => this.nextPage()}>Następna strona</a></button>
            )
        }
    }

    render() {
        return (
            <div className="pagination">
                    {this.handlePreviousButton()}
                    <p>Strona {this.props.page.pageNumber} z {this.props.pokemonsAmount.pokemonsPages}</p>
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