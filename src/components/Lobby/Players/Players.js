import React, { useState } from 'react';

import Player from './Player/Player';
import styles from './players.module.scss';

const Players = ({ players /* kickEvent */ }) => {
    const [playerLimit] = useState(6);

    while (players.length <= playerLimit) {
        players.push({ _id: Math.random().toString(), name: `empty` });
    }

    let showPlayers = players.map((player) => {
        return player.name !== `empty` ? (
            <>
                <Player name={player.name} key={player._id} />
                {/*<button onClick={kickEvent} value={player._id}></button>*/}
            </>
        ) : (
            <Player name={`JOIN`} key={player._id} empty />
        );
    });

    return <div className={styles.Players}>{showPlayers}</div>;
};
export default Players;
