import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import JoinGame from './containers/JoinGame/JoinGame';
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
              <Route exact path="/join" component={JoinGame}/>
              <Route path="/" component={Landing}/>
            </Switch>
          </div>
          <Backdrop/>
        </Aux>
      );
   }
}

export default App;
