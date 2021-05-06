import React, { useEffect } from 'react';
import {
    fetchLobbyPlayers,
    kickPlayer,
    webSocketUpdatePlayers,
} from '../../actions/lobbyActions';
import { useDispatch, useSelector } from 'react-redux';

import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Players from './Players/Players';
import RoomCode from '../Lobby/RoomCode/RoomCode';
import styles from './lobby.module.scss';
import { useParams } from 'react-router-dom';

const Lobby = ({ webSocket }) => {
    let { id } = useParams();

    if (webSocket) {
        webSocket.addEventListener(`message`, (e) => {
            console.log(e.data);
            dispatch(webSocketUpdatePlayers(e.data));
        });
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLobbyPlayers(id));
    }, []);

    const removePlayer = (e) => {
        dispatch(kickPlayer(e.target.value));
    };

    let playerList = <p>Loading</p>;

    const playersInLobby = useSelector((state) => state.playersInLobby);
    const { success, players } = playersInLobby;

    if (success) {
        playerList = <Players kickEvent={removePlayer} players={players} />;
    }

    return (
        <>
            <div className={styles.Lobby}>
                {playerList}
                <RoomCode />
            </div>
            <Backdrop lobby />
        </>
    );
};

export default Lobby;
