import React from 'react';
import styles from './Pokemon.module.sass';
import './PokemonTypes.sass';
import {connect} from 'react-redux';
import {updateLoader} from '../../actions/index';

class Pokemon extends React.Component {

    render() {
        return (
            <div className={styles.pokemons__item} key={this.props.id}>
                <div className={styles.pokemons__itemWrapper}>
                    <img src={this.props.img} alt="" title=""></img>
                    <div className={styles.pokemon__info}>
                        <div className={styles.pokemon__name}>#{this.props.num} {this.props.name}</div>
                        <div>
                            {this.props.type.map( (type) => {
                                return <span key={type} className={type.toLowerCase() + ' ' + styles.pokemon__type}>{type}</span>
                            })}
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

export const PokemonComponent = connect(mapStateToProps, mapDispatchToProps)(Pokemon);