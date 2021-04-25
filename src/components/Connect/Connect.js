import React, { useEffect, useState } from 'react';
import { createLobby, joinLobby } from '../../actions/lobbyActions';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './connect.module.scss';
import { useHistory } from 'react-router-dom';

const Connect = (props) => {
    let history = useHistory();

    const connectPlayer = useSelector((state) => state.playerConnection);
    const { success } = connectPlayer;

    const [player, setPlayer] = useState({
        value: ``,
        rules: {
            // [ Validation rules ]
            requried: true,
            minLength: 3,
            maxLength: 12,
        },
    });

    const [lobbyId, setLobbyId] = useState({
        value: ``,
        rules: {
            // [ Validation rules ]
            requried: true,
            minLength: 4,
            maxLength: 4,
        },
    });

    const dispatch = useDispatch();

    const onChangeHandler = (input, setState) => {
        setState((prevState) => ({
            value: input,
            rules: {
                ...prevState.rules,
            },
        }));
    };

    const createOnSubmit = async () => {
        dispatch(createLobby(player.value));
    };

    const joinOnSubmit = () => {
        dispatch(joinLobby(player.value, lobbyId.value));
    };

    useEffect(() => {
        if (success) {
            history.push(`/lobby/${JSON.parse(localStorage.getItem(`lobby`))}`);
        }
    }, [success]);

    // [ Nickname ]
    const nickname = (
        <Input
            type="text"
            label="Nickname"
            value={player.value}
            setStateTarget={setPlayer}
            changed={onChangeHandler}
        ></Input>
    );

    // [ Lobby Code ]
    const lobbyCode = (
        <Input
            type="text"
            label="Room Code"
            value={lobbyId.value}
            setStateTarget={setLobbyId}
            changed={onChangeHandler}
        ></Input>
    );

    return (
        <div className={styles.Join}>
            <form>
                {nickname}
                {props.joining ? lobbyCode : null}
            </form>
            <Button
                styleClass={`Default`}
                clicked={props.joining ? joinOnSubmit : createOnSubmit}
            >
                {props.buttonLabel.toUpperCase()}
            </Button>
            <Button styleClass={`Back`} clicked={props.back}>
                {`BACK`}
            </Button>
        </div>
    );
};

export default Connect;
