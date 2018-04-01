import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import AuthComponent from './AuthComponent';
import Protected from './Protected';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/login'} component={Login} />
          <AuthComponent>
            <Route path={'/protected'} component={Protected} />
          </AuthComponent>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
