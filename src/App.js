import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './containers/Login'
import NewUser from './containers/NewUser';
import Navbar from './components/Navbar'
import NewDive from './containers/NewDive'
import Dashboard from './containers/Dashboard';
import AllDives from './containers/AllDives';
import { getCurrentUser } from './actions/currentUser'
import './App.css';
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
      this.props.getCurrentUser()
  }

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
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/dives' component={AllDives}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, {getCurrentUser})(App);