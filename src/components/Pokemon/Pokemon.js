import React from 'react';
import './Pokemon.sass';
import {connect} from 'react-redux';
import {updateLoader} from '../../actions/index';

class Pokemon extends React.Component {

    render() {
        return (
            <div className="pokemons__item" key={this.props.id}>
                <div className="pokemons__item-wrapper">
                    <img src={this.props.img} alt="" title="" onLoad={() => this.props.updateLoader(false)}></img>
                    <div>
                        <span>#{this.props.num} {this.props.name}</span>
                        <div>
                            {this.props.type.join(' ')}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
};

const mapStateToProps = (state) => {
    return {
		loader: state.loader
    }
};

const mapDispatchToProps = {updateLoader};

export const PokemonContainer = connect(mapStateToProps, mapDispatchToProps)(Pokemon);