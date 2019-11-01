import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Container, Segment, Sidebar, Menu, Header, Image, Icon } from 'semantic-ui-react'

import UserNavbar from 'components/Navbars/UserNavbar'
import routes from "routes.js";

class UserLayout extends Component {

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return this.getRoutes(prop.views);
            }
            if (prop.layout === "/user") {
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


    state = { visible: true }

    handleMiniClick = () => {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        const { visible } = this.state
        const menu_icon = (visible) ? 'angle double left' : 'angle double right';
        return (
            <>
                <UserNavbar handleMiniClick={this.handleMiniClick} menuIcon={menu_icon} />
                <Container fluid>
                    <Sidebar.Pushable as={Segment}>
                        <Sidebar
                            as={Menu}
                            animation='push'
                            icon='labeled'
                            borderless
                            vertical
                            visible={visible}
                            width='thin'
                        >
                            <Menu.Item as='a'>Home</Menu.Item>
                            <Menu.Item as='a'>Games</Menu.Item>
                            <Menu.Item as='a'>Channels</Menu.Item>
                        </Sidebar>
                        <Sidebar.Pusher dimmed={visible}>
                            <Switch>{this.getRoutes(routes)}</Switch>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Container>
            </>
        )
    }

}

export default UserLayout;