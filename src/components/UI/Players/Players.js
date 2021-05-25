import React, { useState } from 'react';

import Join from './Join/Join';
import Player from './Player/Player';
import styles from './players.module.scss';

/* eslint-disable max-len */

const Players = ({ players }) => {
    const [playerLimit] = useState(6);

    while (players.length < playerLimit) {
        players.push({ _id: Math.random().toString(), name: `empty` });
    }

    let showPlayers = players.map((player) => {
        return player.name !== `empty` ? (
            <Player player={player} key={player._id} />
        ) : (
            <Join key={player._id} empty />
        );
    });

    return <div className={styles.Players}>{showPlayers}</div>;
};
export default Players;
