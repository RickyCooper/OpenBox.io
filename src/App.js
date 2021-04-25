import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Aux from './hoc/Auxiliary/Auxiliary';
import Landing from './components/Landing/Landing';
import Lobby from './components/Lobby/Lobby';
import styles from './app.module.scss';

class App extends Component {
    render() {
        return (
            <Aux>
                <div className={styles.App}>
                    <Switch>
                        <Route path="/lobby/:id" component={Lobby} />
                        <Route exact path="/" component={Landing} />
                    </Switch>
                </div>
            </Aux>
        );
    }
}

export default App;
