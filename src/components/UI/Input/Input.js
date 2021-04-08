import Aux from '../../../hoc/Auxiliary/Auxiliary';
import React from 'react';

const Input = (props) => {
    // [ props ] - state

    return (
        <Aux>
            <label>{props.label}</label>
            <input
                type={props.type}
                value={props.value}
                onChange={(event) => {
                    props.changed(event.target.value, props.setStateTarget);
                }}
            ></input>
        </Aux>
    );
};

export default Input;
