import React, { useEffect } from 'react';
import {
    fetchLobbyPlayers,
    webSocketUpdatePlayers,
} from 'actions/lobbyActions';
import { useDispatch, useSelector } from 'react-redux';

import Backdrop from 'components/UI/Backdrop/Backdrop';
import Connect from 'components/Connect/Connect';
import Modal from 'components/UI/Modal/Modal';
import Players from 'components/UI/Players/Players';
import RoomCode from 'components/UI/RoomCode/RoomCode';
import styles from './lobby.module.scss';
import { useParams } from 'react-router-dom';

const Lobby = ({ webSocket }) => {
    if (webSocket) {
        webSocket.addEventListener(`message`, (e) => {
            console.log(e.data);
            dispatch(webSocketUpdatePlayers(e.data));
        });
    }

    let { id } = useParams();

    const headers = JSON.parse(localStorage.getItem(`headers`));

    let joinModal;

    if (!headers) {
        joinModal = (
            <>
                <Modal>
                    <Connect
                        lobbyIdentifier={id}
                        connectionType={`join`}
                    ></Connect>
                </Modal>
                <Backdrop />
            </>
        );
    }

    const dispatch = useDispatch();

    let playerList = <p>Loading</p>;

    const playersInLobby = useSelector((state) => state.playersInLobby);
    const { success, players } = playersInLobby;

    useEffect(() => {
        dispatch(fetchLobbyPlayers(id));
    }, []);

    if (success) {
        playerList = <Players players={players} />;
    }

    return (
        <>
            {joinModal}
            <div className={styles.Lobby}>
                {playerList}
                <RoomCode />
            </div>
            <Backdrop lobby />
        </>
    );
};

export default Lobby;
