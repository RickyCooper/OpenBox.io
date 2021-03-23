import React from 'react';
import styles from './player.module.scss';

const Player = (props) => {
    let classArray = [styles.Player];

    if (props.empty) {
        classArray.push(styles.Join);
    }

    console.log(props.name);
    return <p className={classArray.join(' ')}>{props.name}</p>;
};

export default Player;
