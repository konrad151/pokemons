import React from 'react';
import {connect} from 'react-redux';
import {updateLoader} from '../../actions/index';

class Pokemon extends React.Component {

    render() {
        return (
            <div className="pokemon">
                <div key={this.props.id}>
                    <img src={this.props.img} alt="" title="" onLoad={() => this.props.updateLoader(false)}></img>
                    <span>#{this.props.num}</span>
                    <span>{this.props.name}</span>
                    <span>{this.props.type}</span>
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