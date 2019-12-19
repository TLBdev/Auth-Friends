import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Nav />
        <Switch>
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/friends' component={Friends} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
