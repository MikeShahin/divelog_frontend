import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NewUser from './components/NewUser';
import Navbar from './Navbar'
import NewDive from './components/NewDive'
import Dashboard from './containers/Dashboard';
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
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(null, {getCurrentUser})(App);