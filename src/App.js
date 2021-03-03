import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import './app.module.scss';
import styles from './app.module.scss';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Aux from './hoc/Auxiliary/Auxiliary'
 class App extends Component {

   render() {
      return (
        <Aux>
          <div className={styles.App}>
            <Switch>
              <Route exact path="/" exact component={Landing}/>
            </Switch>
          </div>
          <Backdrop/>
        </Aux>
      );
   }
}

export default App;
