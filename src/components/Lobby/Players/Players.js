import React, { useState } from 'react';
import styles from './players.module.scss';
import Player from './Player/Player';

const Players = (props) => {
    const [playerLimit, setPlayerLimit] = useState(8);
    const [playersInLobby, setPlayersInLobby] = useState([]);

    if (playersInLobby.length < playerLimit) {
        let emptyPlayer = [...playersInLobby];

        while (emptyPlayer.length <= playerLimit) {
            emptyPlayer.push({ name: 'empty', _id: Math.random().toString() });
        }

        setPlayersInLobby([...emptyPlayer]);
    }
    let showPlayers = playersInLobby.map((player, index) => {
        return player.name !== `empty` ? (
            <Player name={player.name} key={player._id} />
        ) : (
            <Player name={`JOIN`} empty />
        );
    });

    return <div className={styles.Players}>{showPlayers}</div>;
};
export default Players;
