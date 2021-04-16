import React, { useCallback, useState } from 'react';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Validate from '../../shared/Validate/Validate';
import axios from '../../shared/axios';
import styles from './connect.module.scss';

const Connect = (props) => {
    // [ State - player ]
    const [player, setPlayer] = useState({
        value: ``,
        rules: {
            // [ Validation rules ]
            requried: true,
            minLength: 3,
            maxLength: 12,
        },
    });

    // [ State - lobbyId  ]
    const [lobbyId, setLobbyId] = useState({
        value: ``,
        rules: {
            // [ Validation rules ]
            requried: true,
            minLength: 4,
            maxLength: 4,
        },
    });

    // [ onChangeHandler ]
    const onChangeHandler = (input, setState) => {
        setState((prevState) => ({
            value: input,
            rules: {
                ...prevState.rules,
            },
        }));
    };

    /*

    const ConnectPlayer = useCallback(() => {
          axios({
                method: 'POST',
                url: '/lobby',
                data: {
                    player: player,
                },
            })
                .then((response) => {
                    setPlayer.value(response.data.player);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
    })

    */

    // [ Create Lobby ]
    const createLobby = useCallback(() => {
        const [valid, errorMessage] = Validate(player.rules, player.value);
        if (valid) {
            axios({
                method: `POST`,
                url: `/lobby`,
                data: {
                    playerName: player.value,
                },
            })
                .then((response) => {
                    onChangeHandler(response.data.player, setPlayer);
                    onChangeHandler(response.data.lobby, setLobbyId);
                    console.log(lobbyId);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log(errorMessage);
        }
    }, [player]);

    // [ Join Lobby ]
    const joinLobby = useCallback(() => {
        axios({
            method: `POST`,
            url: `/lobby`,
            data: {
                playerName: player.value,
                lobbyId: lobbyId,
            },
        })
            .then((response) => {
                onChangeHandler(response.data.player, setPlayer);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [player, lobbyId]);

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
                clicked={props.joining ? joinLobby : createLobby}
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
