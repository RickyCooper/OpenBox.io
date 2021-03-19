import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Join from './containers/Join/Join';
import Lobby from './containers/Lobby/Lobby';
import styles from './app.module.scss';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Aux from './hoc/Auxiliary/Auxiliary';
import './app.module.scss';


 class App extends Component {

   render() {
      return (
        <Aux>
          <div className={styles.App}>
            <Switch>
              <Route exact path="/join" component={Join}/>
              <Route exact path="/lobby" component={Lobby}/>
              <Route path="/" component={Landing}/>
            </Switch>
          </div>
          <Backdrop/>
        </Aux>
      );
   }
}

export default App;
