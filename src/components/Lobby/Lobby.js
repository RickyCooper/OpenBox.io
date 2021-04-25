import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Players from './Players/Players';
import RoomCode from '../Lobby/RoomCode/RoomCode';
import { fetchLobbyPlayers } from '../../actions/lobbyActions';
import styles from './lobby.module.scss';
import { useParams } from 'react-router-dom';

const Lobby = () => {
    let { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        /*
        setInterval(() => {
            dispatch(fetchLobbyPlayers(id));
        }, 5000);
        */
        dispatch(fetchLobbyPlayers(id));
    }, []);

    let playerList = <p>Loading</p>;

    const playersInLobby = useSelector((state) => state.playersInLobby);
    const { success, players } = playersInLobby;

    if (success) {
        playerList = <Players players={players} />;
    }

    return (
        <div className={styles.Lobby}>
            {playerList}
            <RoomCode />
        </div>
    );
};

export default Lobby;
