import React, { useState } from 'react';

import Players from './Players/Players';
import RoomCode from '../Lobby/RoomCode/RoomCode';
import axios from '../../shared/axios';
import styles from './lobby.module.scss';
import { useParams } from 'react-router-dom';

const Lobby = () => {
    const { lobbyId } = useParams();

    useState(() => {
        axios({
            method: `POST`,
            url: `/lobby`,
            data: {
                lobbyId: lobbyId,
            },
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className={styles.Lobby}>
            <Players />
            <RoomCode />
        </div>
    );
};

export default Lobby;
