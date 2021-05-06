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
    WEBSOCKET_LOBBY_UPDATE,
} from '../constants/lobbyConstants';

export const connectToLobbyReducer = (state = {}, action) => {
    switch (action.type) {
    // CREATE LOBBY
    case CREATE_LOBBY_REQUEST:
        return { loading: true };
    case CREATE_LOBBY_SUCCESS:
        return {
            loading: false,
            success: true,
            player: action.payload.player,
            lobby: action.payload.lobby,
        };
    case CREATE_LOBBY_FAIL:
        return { loading: false, error: action.payload };
        // JOIN LOBBY
    case JOIN_LOBBY_REQUEST:
        return { loading: true };
    case JOIN_LOBBY_SUCCESS:
        return {
            loading: false,
            success: true,
            player: action.payload.player,
            lobby: action.payload.lobby,
        };
    case JOIN_LOBBY_FAIL:
        return { loading: false, error: action.payload };
    default:
        return state;
    }
};

export const fetchLobbyPlayersReducer = (state = {}, action) => {
    switch (action.type) {
    case FETCH_LOBBY_PLAYERS_REQUEST:
        return { loading: true };
    case FETCH_LOBBY_PLAYERS_SUCCESS:
        return {
            loading: false,
            success: true,
            players: action.payload.players,
        };
    case FETCH_LOBBY_PLAYERS_FAIL:
        return { loading: false, error: action.payload };

    case WEBSOCKET_LOBBY_UPDATE:
        return {
            loading: false,
            success: true,
            players: action.payload,
        };

    default:
        return state;
    }
};
