import React, { Component } from "react";
import { Button, Dropdown, Menu, Header, Icon } from 'semantic-ui-react'

class AuthNavbar extends Component {
    
    render() {
        const { menuIcon } = this.props;
        return (
            <Menu size='mini' color='teal' borderless>
                <Menu.Item style={{ marginRight: -20 }}>
                    <Header as='h4' color='teal'>Portal V1</Header>
                </Menu.Item>
                <Menu.Item>
                    <Button
                        icon
                        onClick={this.props.handleMiniClick}
                        size='mini'
                        style={{ boxShadow: '0 0 0 0' }}
                        basic
                    >
                        <Icon name={menuIcon} color="orange" />
                    </Button>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>

        )
    }
}

export default AuthNavbar;