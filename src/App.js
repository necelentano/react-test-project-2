import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './components/Header/Header'
import Home from './pages/Home';
import Profile from './pages/Profile';
import News from './pages/News';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PrivateRoute from "./components/PrivateRoute";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
