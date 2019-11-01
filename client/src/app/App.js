import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import AuthLayout from 'layouts/Auth'
import UserLayout from 'layouts/User'

import { Container } from 'semantic-ui-react'


class App extends Component {

  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {
    return (
      <Container style={{ paddingLeft: '1em', paddingRight: '1em', margin: '0.5em' }} fluid>
        <Router history={this.history}>
          <Switch>
            <Route path="/auth" component={AuthLayout} />
            <Route path="/user" component={UserLayout} />
          </Switch>
        </Router>
      </Container>
    );
  }
}



export default App;