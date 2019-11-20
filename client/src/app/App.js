import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/Auth'
import { UserLayout } from 'layouts/User'
import { Container } from 'semantic-ui-react'
import NotFound from 'views/NotFound'

import { ConnectedRouter } from 'connected-react-router'
import { history } from 'store'

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ paddingLeft: '1em', paddingRight: '1em', margin: '0.5em' }} fluid>
        <ConnectedRouter history={history}>
          <>
            <Switch>
              <Route path="/auth" component={AuthLayout} />
              <Route path="/user" component={UserLayout} />
              <Route path="/404" component={NotFound} />

              <Redirect from="/" exact to="/user" />
              <Redirect to="/404" />
            </Switch>
          </>
        </ConnectedRouter>
      </Container>
    );
  }
}



export default App;