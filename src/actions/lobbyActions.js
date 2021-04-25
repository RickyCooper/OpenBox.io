import {
    CREATE_LOBBY_FAIL,
    CREATE_LOBBY_REQUEST,
    CREATE_LOBBY_SUCCESS,
    FETCH_LOBBY_PLAYERS_FAIL,
    FETCH_LOBBY_PLAYERS_REQUEST,
    FETCH_LOBBY_PLAYERS_SUCCESS,
    JOIN_LOBBY_FAIL,
    JOIN_LOBBY_REQUEST,
    JOIN_LOBBY_SUCCESS,
} from '../constants/lobbyConstants';

import axios from '../shared/axios';

export const createLobby = (playerName) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_LOBBY_REQUEST,
        });

        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const { data } = await axios.post(`/lobby`, { playerName }, config);

        dispatch({
            type: CREATE_LOBBY_SUCCESS,
            payload: data,
        });

        localStorage.setItem(`lobby`, JSON.stringify(data.lobby._id));
        localStorage.setItem(`player`, {
            _id: JSON.stringify(data.player._id),
            name: JSON.stringify(data.player.name),
            secret: JSON.stringify(data.player.secret),
        });
    } catch (error) {
        dispatch({
            type: CREATE_LOBBY_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message,
        });
    }
};

export const joinLobby = (playerName, lobby_id) => async (dispatch) => {
    try {
        dispatch({
            type: JOIN_LOBBY_REQUEST,
        });

        const config = {
            headers: {
                lobbyid: lobby_id,
            },
        };
        const { data } = await axios.put(
            `/lobby/players`,
            { playerName },
            config,
        );

        dispatch({
            type: JOIN_LOBBY_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: JOIN_LOBBY_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message,
        });
    }
};

export const fetchLobbyPlayers = (lobby_id) => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_LOBBY_PLAYERS_REQUEST,
        });

        const config = {
            headers: {
                lobbyid: lobby_id,
            },
        };
        const { data } = await axios.get(`/lobby/players`, config);

        dispatch({
            type: FETCH_LOBBY_PLAYERS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_LOBBY_PLAYERS_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message,
        });
    }
};
