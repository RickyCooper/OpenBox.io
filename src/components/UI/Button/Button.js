import React from 'react';
import styles from './button.module.scss';

function Button(props) {
    return (
        <button onClick={props.clicked} className={styles[props.styling]}>
            <p>{props.children}</p>
        </button>
    );
}
export default Button;
