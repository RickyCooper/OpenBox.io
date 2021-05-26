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
    REMOVE_PLAYER_FAIL,
    REMOVE_PLAYER_REQUEST,
    REMOVE_PLAYER_SUCCESS,
    WEBSOCKET_LOBBY_UPDATE,
} from '../constants/lobbyConstants';

import axios from '../shared/axios';

// CREATE LOBBY ACTION

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

        localStorage.setItem(
            `headers`,
            JSON.stringify({
                playerId: data.player._id,
                lobbyId: data.lobby._id,
                secret: data.player.secret,
            }),
        );

        dispatch({
            type: CREATE_LOBBY_SUCCESS,
            payload: data,
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

// JOIN LOBBY ACTION

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

        localStorage.setItem(
            `headers`,
            JSON.stringify({
                playerId: data.player._id,
                lobbyId: data.lobby._id,
                secret: data.player.secret,
            }),
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

// FETCH LOBBY ACTION

export const fetchLobbyPlayers = (id) => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_LOBBY_PLAYERS_REQUEST,
        });

        const config = {
            headers: {
                lobbyid: id,
            },
        };
        const { data } = await axios.get(`/lobby`, config);

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

// REM0VE PLAYER ACTION

export const removePlayer = (playerId) => async (dispatch) => {
    const headers = JSON.parse(localStorage.getItem(`headers`));

    try {
        dispatch({
            type: REMOVE_PLAYER_REQUEST,
        });
        const { data } = await axios.delete(`/lobby/players`, {
            headers: headers,
            data: { playerId },
        });

        dispatch({
            type: REMOVE_PLAYER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: REMOVE_PLAYER_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message,
        });
    }
};

// UPDATE LOBBY ACTION

export const webSocketUpdatePlayers = (data) => async (dispatch) => {
    data = JSON.parse(data);
    console.log(data.lobby.players);

    dispatch({
        type: WEBSOCKET_LOBBY_UPDATE,
        payload: data.lobby.players,
    });
};
