import Aux from '../../../hoc/Auxiliary/Auxiliary';
import React from 'react';
import styles from './input.module.scss';

const Input = (props) => {
    // [ props ] - state

    return (
        <Aux>
            <label className={styles.Label}>{props.label}</label>
            <input
                type={props.type}
                value={props.value}
                onChange={(event) => {
                    props.changed(event.target.value, props.setStateTarget);
                }}
                className={styles.Input}
            ></input>
        </Aux>
    );
};

export default Input;
