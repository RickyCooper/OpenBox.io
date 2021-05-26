import { useDispatch, useSelector } from 'react-redux';

import Cross from 'assets/svgs/svgCross/svgCross';
import Crown from 'assets/svgs/svgCrown/svgCrown';
import React from 'react';
import { removePlayer } from 'actions/lobbyActions';
import styles from './player.module.scss';

/* eslint-disable max-len */

const Player = ({ player }) => {
    const dispatch = useDispatch();

    const lobbyData = useSelector((state) => state.currentLobby.lobby);
    const { host } = lobbyData;

    const headers = JSON.parse(localStorage.getItem(`headers`));

    const kickPlayer = (playerId) => {
        dispatch(removePlayer(playerId));
    };

    let styleArray = [styles.Player];

    if (host._id === headers.playerId && host._id !== player._id) {
        styleArray.push(styles.Host);
        console.log(styleArray);
    }

    return (
        <div className={[...styleArray].join(` `)}>
            <p>{player.name}</p>
            {host._id != headers.playerId || host._id === player._id ? null : (
                <div>
                    <button style={{ backgroundColor: `white` }}>
                        <Crown />
                    </button>
                    <button
                        style={{ backgroundColor: `black` }}
                        onClick={(e) => kickPlayer(player._id, e)}
                    >
                        <Cross />
                    </button>
                </div>
            )}
            {host._id == player._id ? <Crown /> : null}
        </div>
    );
};

export default Player;
