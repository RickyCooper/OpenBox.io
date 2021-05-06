import { Route, Switch } from 'react-router-dom';

import Aux from './hoc/Auxiliary/Auxiliary';
import Landing from './components/Landing/Landing';
import Lobby from './components/Lobby/Lobby';
import React from 'react';
import styles from './app.module.scss';
import { useSelector } from 'react-redux';

const App = () => {
    const isConnected = useSelector((state) => state.playerConnection);
    const { success } = isConnected;

    let webSocket;

    if (success) {
        const headers = JSON.parse(localStorage.getItem(`headers`));

        webSocket = new WebSocket(
            // eslint-disable-next-line max-len
            `wss://ws.open-box.io?lobbyId=${headers.lobbyId}&playerId=${headers.playerId}&secret=${headers.secret}`,
        );

        webSocket.addEventListener(`open`, () => {
            console.log(`we have made a connection`);
        });

        webSocket.addEventListener(`message`, (e) => {
            console.log(e.data);
        });
    }

    return (
        <Aux>
            <div className={styles.App}>
                <Switch>
                    <Route
                        path="/lobby/:id"
                        render={(props) => (
                            <Lobby
                                {...props}
                                webSocket={success ? webSocket : null}
                            />
                        )}
                    />
                    <Route exact path="/" component={Landing} />
                </Switch>
            </div>
        </Aux>
    );
};

export default App;
