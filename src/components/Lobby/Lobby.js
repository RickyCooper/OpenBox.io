import React, { Component } from 'react';

import Players from './Players/Players';
import RoomCode from '../Lobby/RoomCode/RoomCode';
import styles from './lobby.module.scss';

class Lobby extends Component {
    render() {
        return (
            <div className={styles.Lobby}>
                <Players />
                <RoomCode />
            </div>
        );
    }
}

export default Lobby;
