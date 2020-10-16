import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Wizard from './../../common/components/wizard/Wizard';
import Login from "../../common/components/login/Login";


class App extends Component {
  render() {
    return (
        <Switch>
          <Route  path="/wizard" component={Wizard} />
          <Route  path="/" exact component={Login} />
        </Switch>
    );
  }
}

export default App;
