import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
    connectToLobbyReducer,
    fetchLobbyPlayersReducer,
} from '../reducers/lobbyReducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    playerConnection: connectToLobbyReducer,
    playersInLobby: fetchLobbyPlayersReducer,
});

const initialState = { create: { lobby: {}, player: {} } };

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
