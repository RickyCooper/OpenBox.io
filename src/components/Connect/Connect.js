import React, { useEffect, useState } from 'react';
import { createLobby, joinLobby } from 'actions/lobbyActions';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/UI/Button/Button';
import Input from 'components/UI/Input/Input';
import styles from './connect.module.scss';
import { useHistory } from 'react-router-dom';

const Connect = ({ back, connectionType, lobbyIdentifier = `` }) => {
    // [ Two user inputs, players name and lobby id  ]
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
        value: lobbyIdentifier,
        rules: {
            // [ Validation rules ]
            requried: true,
            minLength: 4,
            maxLength: 4,
        },
    });

    const onChangeHandler = (input, setState) => {
        setState((prevState) => ({
            value: input,
            rules: {
                ...prevState.rules,
            },
        }));
    };

    const dispatch = useDispatch();

    const createOnSubmit = async () => {
        dispatch(createLobby(player.value));
    };

    const joinOnSubmit = () => {
        console.log(lobbyId.value);
        dispatch(joinLobby(player.value, lobbyId.value));
    };

    const connectPlayer = useSelector((state) => state.playerConnection);
    const { success, loading, lobby } = connectPlayer;

    let history = useHistory();

    useEffect(() => {
        if (success) {
            history.push(`/lobby/${lobby._id}`);
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
    const lobbyCode
        = lobbyIdentifier || connectionType === `host` ? null : (
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
            {loading ? (
                <p>Loading</p>
            ) : (
                <>
                    <form>
                        {nickname}
                        {lobbyCode}
                    </form>
                    <Button
                        styling={`Default`}
                        clicked={
                            connectionType === `host` ?
                                createOnSubmit
                                : joinOnSubmit
                        }
                    >
                        {connectionType.toUpperCase()}
                    </Button>
                    {!back ? null : (
                        <Button styling={`Back`} clicked={back}>
                            {`back`}
                        </Button>
                    )}
                </>
            )}
        </div>
    );
};

export default Connect;
