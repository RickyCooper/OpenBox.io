import React, { Component } from 'react';
import RoomCode from '../Lobby/RoomCode/RoomCode';
import Players from './Players/Players';
import styles from './lobby.module.scss';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

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