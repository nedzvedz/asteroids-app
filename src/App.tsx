import * as React from 'react';
import './App.css';

import Listing from './pages/listing';
import Detail from './pages/detail';
import { NotFound } from './pages/not-found';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const logo = require('./logo.svg');

class App extends React.Component<null, null> {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <h2>Welcome to Asteroids App</h2>
          </div>
          <div className="App-intro">
            <Switch>
              <Route exact path="/" component={Listing}/>
              <Route path="/detail/:id" component={Detail}/>
              <Route render={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
