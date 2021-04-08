import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Aux from './hoc/Auxiliary/Auxiliary';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Landing from './components/Landing/Landing';
import Lobby from './components/Lobby/Lobby';
import styles from './app.module.scss';

class App extends Component {
    render() {
        return (
            <Aux>
                <div className={styles.App}>
                    <Switch>
                        <Route exact path="/lobby" component={Lobby} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </div>
                <Backdrop />
            </Aux>
        );
    }
}

export default App;
