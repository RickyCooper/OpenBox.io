import React from 'react';
import styles from './button.module.scss';

// child, path, style 

function Button(props) {

    return (
        <button className={styles.DefualtStyle} onClick={props.onClickEvent}><p>{props.child}</p></button>
    );
}

export default Button