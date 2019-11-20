import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react'

import routes from "routes.js";

class AuthLayout extends Component {

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return this.getRoutes(prop.views);
            }
            if (prop.layout === "/auth") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    render() {
        return (
            <>
                <Container>
                    <Switch>{this.getRoutes(routes)}</Switch>
                </Container>
            </>
        )
    }
}

export default AuthLayout;