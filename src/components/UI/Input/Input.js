import Aux from '../../../hoc/Auxiliary/Auxiliary';
import React from 'react';
import styles from './input.module.scss';

const Input = (props) => {
    // [ props ] - label, value, type, onChange

    return (
        <Aux>
            <label>{props.label}</label>
            <input
                type={props.type}
                value={props.value}
                onChange={(event) => {
                    props.state(event.target.value);
                }}
            ></input>
        </Aux>
    );
};

export default Input;
