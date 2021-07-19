import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NewUser from './components/NewUser';
import Navbar from './Navbar'
import NewDive from './components/NewDive'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
         <BrowserRouter>
         <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/newuser' component={NewUser}/>
            <Route exact path='/newdive' component={NewDive}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;