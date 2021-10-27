import React, { useState } from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import Home from './Home';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Avatar from './Avatar';
import Map from './Map';
import RecentLogs from './RecentLogs';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <div className="App">
        <Router> 
          <header>
            <NavBar/>
          </header>
          <Switch>
            <main>
              <Route exact path = '/' component = {Home}></Route>
              <Route exact path = '/login' component = {LoginForm}></Route>
              <Route exact path = '/signup' component = {SignUpForm}></Route>
              <Route exact path = '/avatar' component = {Avatar}></Route>
              <Route exact path = '/map' component = {Map}></Route>
              <Route exact path = '/logs' component = {RecentLogs}></Route>
            </main>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
