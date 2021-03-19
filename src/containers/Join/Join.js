import React, { useState } from 'react';
import styles from './join.module.scss';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

const Join = () => {

    

    const [playerName, setPlayerName] = useState('');
    const [roomCode, setRoomCode] = useState('');
    
        return (
            <Modal>
                <div className={styles.Join}>
                <h1>Join Game</h1>
                <form>
                    <label>Room Code</label>
                    <input type="text" value={playerName} onChange={event => {setPlayerName(event.target.value)}}></input>
                    <label>Name</label>
                    <input type="text" value={roomCode} onChange={event => {setRoomCode(event.target.value)}}></input>
                </form>
                <Button child={"Enter"} />
                </div>
            </Modal>
        );
}

export default Join