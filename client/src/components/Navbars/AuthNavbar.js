import React, { Component } from "react";
import { Button, Dropdown, Menu } from 'semantic-ui-react'

class AuthNavbar extends Component {

    render() {
        return (

            <Menu size='mini' color='orange' borderless>
                <Menu.Item
                    name='PORTAL V1'
                    color='orange'
                />

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