import React from 'react';
import styles from './input.module.scss';

const Input = (props) => {
    // [ props ] - state

    return (
        <>
            <label className={styles.Label}>{props.label}</label>
            <input
                type={props.type}
                value={props.value}
                onChange={(event) => {
                    props.changed(event.target.value, props.setStateTarget);
                }}
                className={styles.Input}
            ></input>
        </>
    );
};

export default Input;
