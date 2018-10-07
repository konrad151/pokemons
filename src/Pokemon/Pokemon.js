import React from 'react';

const pokemon = ( props ) => {
    return (
        <div className="pokemon">
            <div key={props.id}>
                <img src={props.img} alt="" title=""></img>
                <span>#{props.num}</span>
                <span>{props.name}</span>
                <span>{props.type}</span>
            </div>
        </div>
    )
};

export default pokemon;