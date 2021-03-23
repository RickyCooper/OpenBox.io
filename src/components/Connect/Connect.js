import React, { useCallback, useState } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import axios from '../../shared/axios';
import styles from './connect.module.scss';

const Connect = (props) => {
    const [playerName, setPlayerName] = useState('');
    const [roomCode, setRoomCode] = useState('');
    const [formIsValid, setFormIsValid] = useState(null);

    const formValidation = useCallback((formIsValid) => {});

    const createLobby = useCallback(() => {
        if (formValidation) {
            axios({
                method: 'POST',
                url: '/lobby',
                data: {
                    playername: playerName,
                },
            })
                .then((response) => {
                    setPlayerName(response.data.player);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [playerName]);

    const joinLobby = useCallback(() => {
        if (formValidation) {
            axios({
                method: 'POST',
                url: '/lobby',
                data: {
                    playername: playerName,
                    roomcode: roomCode,
                },
            })
                .then((response) => {
                    setPlayerName(response.data.player);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [playerName, roomCode]);

    const nicknameInput = (
        <Input
            type="text"
            label="Nickname"
            value={playerName}
            state={setPlayerName}
        ></Input>
    );

    let userInputs = nicknameInput;

    if (props.joining) {
        userInputs = (
            <Aux>
                <Input
                    type="text"
                    label="Room Code"
                    value={roomCode}
                    state={setRoomCode}
                ></Input>
                {nicknameInput}
            </Aux>
        );
    }

    return (
        <div className={styles.Join}>
            <form>{userInputs}</form>
            <Button
                styleClass={'Default'}
                clicked={props.joining ? joinLobby() : createLobby}
            >
                {props.buttonLabel.toUpperCase()}
            </Button>
            <Button styleClass={'Back'} clicked={props.back}>
                {'BACK'}
            </Button>
        </div>
    );
};

export default Connect;
