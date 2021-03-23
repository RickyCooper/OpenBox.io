import React from 'react';
import styles from './Button.module.scss';

function Button(props) {
    return (
        <button onClick={props.clicked} className={styles[props.styleClass]}>
            <p>{props.children}</p>
        </button>
    );
}
export default Button;
