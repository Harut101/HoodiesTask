import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import SignIn from './Containers/Sign-In/Sign-In';
import Profile from './Containers/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact  component={SignIn} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
