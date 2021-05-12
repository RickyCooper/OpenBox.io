import React from 'react';
import styles from './roomcode.module.scss';
import { useParams } from 'react-router-dom';

const RoomCode = () => {
    let { id } = useParams();

    return (
        <div className={styles.RoomCode}>
            <h1>Room Code</h1>
            <p>{id}</p>
        </div>
    );
};

export default RoomCode;
